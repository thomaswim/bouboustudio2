// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';  // Ajout de cette ligne

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrk_Lw5-AaVWobTJrORQU6Uc7GYU23k-0",
  authDomain: "bouboustudio.firebaseapp.com",
  databaseURL: "https://bouboustudio-default-rtdb.firebaseio.com",
  projectId: "bouboustudio",
  storageBucket: "bouboustudio.appspot.com",
  messagingSenderId: "1007243069872",
  appId: "1:1007243069872:web:40e79ec89fbbd01492ae75",
  measurementId: "G-PPZJGZQH1W"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Realtime Database
const db = getDatabase(firebaseApp);

// Initialisation de l'authentification Firebase  // Ajout de cette ligne
const auth = getAuth(firebaseApp);  // Ajout de cette ligne

// Export des modules
export { firebaseApp, db, auth };  // Ajout de 'auth'
