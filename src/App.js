import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TransparentNavbar from './components/TransparentNavbar';
import Home from './home';
import MonCompte from './components/MonCompte';
import withAuth from './withAuth';
import Login from './login'; 
// ... autres imports ...
import './App.css'





function App() {
    const AuthenticatedHome = withAuth(Home);
    const AuthenticatedMonCompte = withAuth(MonCompte);
    return (
        <div className="App" >
            
        <Router>
            
        <TransparentNavbar />
                 <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<AuthenticatedHome />} />
                    <Route path="/mon-compte" element={<AuthenticatedMonCompte />} />
                    {/* Autres routes ... */}
                </Routes>
            
        </Router>
        </div>
    );
}

export default App;
