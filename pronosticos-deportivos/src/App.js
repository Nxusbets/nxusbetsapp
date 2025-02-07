import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Login from './components/login';
import Register from './components/Registration';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <Router> 
      <div className="App">
        <Navbar 
          setShowLogin={setShowLogin} 
          setShowRegister={setShowRegister} 
        /> 
        <Routes> 
          <Route path="/login" element={<Login showLogin={showLogin} />} />
          <Route path="/register" element={<Register showRegister={showRegister} />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;