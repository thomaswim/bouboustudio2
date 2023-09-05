import React, { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { getAuth, signOut } from 'firebase/auth';
import { getDatabase, ref, onValue, update } from 'firebase/database';

const MonCompte = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [editing, setEditing] = useState(false); // État pour le mode d'édition
  const [newName, setNewName] = useState(''); // Nouveau nom pour le champ de formulaire

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Redirection vers la page de connexion ou la page d'accueil
    }).catch((error) => {
      console.error("Erreur lors de la déconnexion :", error);
    });
  };

  const handleUpdate = () => {
    const auth = getAuth();
    const userId = auth.currentUser?.uid;
    const db = getDatabase();
    const userRef = ref(db, 'users/' + userId);

    const updates = {
      name: newName,
    };

    update(userRef, updates);
    setEditing(false);
  };

  useEffect(() => {
    const auth = getAuth();
    const userId = auth.currentUser?.uid;
    const db = getDatabase();
    const userRef = ref(db, 'users/' + userId);

    const unsubscribe = onValue(userRef, (snapshot) => {
      setUserInfo(snapshot.val());
      setNewName(snapshot.val()?.name || ''); // Initialiser le champ du formulaire avec la valeur actuelle
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="d-flex justify-content-center mt-5">
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title><h1>Mon Compte</h1></Card.Title>
          <Card.Text>
            <h2>Informations du compte:</h2>
            {editing ? (
              <Form>
                <Form.Group>
                  <Form.Label>Nom :</Form.Label>
                  <Form.Control type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
                </Form.Group>
                <Button onClick={handleUpdate}>Mettre à jour</Button>
              </Form>
            ) : (
              userInfo && (
                <>
                  <div><strong>Nom :</strong> {userInfo.name}</div>
                  <div><strong>Email :</strong> {userInfo.email}</div>
                  <div><strong>Date d'inscription :</strong> {userInfo.dateJoined}</div>
                </>
              )
            )}
          </Card.Text>
          <div className="d-flex justify-content-between">
            <Button variant="primary" onClick={() => setEditing(!editing)}>
              {editing ? 'Annuler' : 'Modifier mes informations'}
            </Button>
            <Button variant="danger" onClick={handleSignOut}>Se déconnecter</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MonCompte;
