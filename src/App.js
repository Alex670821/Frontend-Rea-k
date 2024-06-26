import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './componentes/Login';
import LoginRegister from './componentes/LoginRegister/LoginRegister';

function App() {
    return (

    
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />

                <Route path="/login" element={<LoginRegister />} />
                {/* Agrega otras rutas aquí */}
            </Routes>
        </Router>

        
    );
}

export default App;
