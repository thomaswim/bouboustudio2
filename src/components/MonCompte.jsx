// src/pages/MonCompte.jsx

import React from 'react';

const MonCompte = () => {
    return (
        <div>
            <h1>Mon Compte</h1>
            <div>
                <h2>Informations du compte:</h2>
                <p><strong>Nom :</strong> Jean Dupont</p>
                <p><strong>Email :</strong> jean.dupont@email.com</p>
                <p><strong>Date d'inscription :</strong> 01/01/2022</p>

                {/* Vous pouvez ajouter d'autres détails ici selon vos besoins */}
            </div>
            <div>
                <button>Modifier mes informations</button>
            </div>
        </div>
    );
};

export default MonCompte;
