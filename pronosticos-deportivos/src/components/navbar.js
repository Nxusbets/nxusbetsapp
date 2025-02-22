import React from 'react';




function Navbar({ setShowLogin, setShowRegister }) {
   

    const handleLoginClick = () => {
        setShowLogin(!showLogin);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">NxuS Bets</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contenido premium</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Registro</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={handleLoginClick}>Login</a>
                        </li>
                    </ul>
                </div>
            </div>
           
        </nav>
    );
}

export default Navbar;


