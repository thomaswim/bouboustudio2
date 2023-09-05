import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set, get } from 'firebase/database';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const history = useNavigate();
  const auth = getAuth();
  const db = getDatabase();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Tentative de connexion"); // Debug
  
    try {
      console.log("Email et mot de passe :", email, password); // Debug
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User Credential :", userCredential); // Debug
      const user = userCredential.user;

      // Vérifie si l'utilisateur existe dans la base de données en temps réel
      const userRef = ref(db, `users/${user.uid}`);
      const userSnapshot = await get(userRef);
      
      if (!userSnapshot.exists()) {
        // Si l'utilisateur n'existe pas, créez un nouveau profil avec des valeurs par défaut
        set(userRef, {
          firstName: '',
          lastName: '',
          email: user.email,
          likedFilms: [],
          dateJoined: new Date().toISOString(),
          // ... autres champs par défaut
        });
      }

      // Si tout se passe bien, redirige vers la page d'accueil
      history('/');
      
      // ... (le reste du code)
  
    } catch (err) {
      console.error("Erreur de connexion :", err); // Debug
      // Personnalisation des messages d'erreur
    let customMessage;
    switch (err.code) {
      case 'auth/invalid-email':
        customMessage = 'Votre adresse e-mail semble être mal formée.';
        break;
      case 'auth/user-disabled':
        customMessage = 'Votre compte a été désactivé.';
        break;
      case 'auth/user-not-found':
        customMessage = 'Aucun compte ne correspond à cette adresse e-mail.';
        break;
      case 'auth/wrong-password':
        customMessage = 'Votre mot de passe est incorrect.';
        break;
      default:
        customMessage = 'Une erreur s\'est produite pendant la connexion.';
    }
    setError(customMessage);
  }
  };
  

  const requestAccess = () => {
    const subject = encodeURIComponent("Demande d'accès au site");
    const body = encodeURIComponent(`Bonjour,\n\nJe souhaite demander un accès au site.\n\Merci,\n${email}`);
    window.open(`mailto:thomasboursac@gmail.com?subject=${subject}&body=${body}`);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{flexDirection:"column"}}>
      <Card style={{ width: '25rem' }}>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>

            {error && <p className="text-danger mt-2">{error}</p>}
          </Form>
        </Card.Body>
      </Card>
      <div className="mt-4">
        <p>Pas de compte?</p>
        <Button variant="secondary" onClick={requestAccess}>
          Demander un accès
        </Button>
      </div>
    </div>
  );
};

export default Login;
