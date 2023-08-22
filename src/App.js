import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TransparentNavbar from './components/TransparentNavbar';
import Home from './home';
import MonCompte from './components/MonCompte';
// ... autres imports ...
import './App.css'





function App() {
    return (
        <div className="App" >
        <Router>
            
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mon-compte" element={<MonCompte />} />
                    {/* Autres routes... */}
                </Routes>
            
        </Router>
        </div>
    );
}

export default App;
