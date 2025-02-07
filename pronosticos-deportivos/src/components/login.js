import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Login({ showLogin }) {
  return (
    <div className={`login-form ${showLogin ? 'show' : ''}`}> 
      <section 
        className="register-form vh-100 bg-image"
        style={{ 
          backgroundImage: "url('https://tse3.mm.bing.net/th?id=OIP.6LhPGVbQYXdGk7OR3h2cRwHaE6&pid=Api&P=0&h=180')" 
        }}
      >
        <div className="mask d-flex align-items-center h-80 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: '15px' }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Iniciar sesión</h2>

                    <form>
                      <div className="form-outline mb-4">
                        <input 
                          type="email" 
                          id="form3Example3cg" 
                          className="form-control form-control-lg" 
                        />
                        <label 
                          className="form-label" 
                          htmlFor="form3Example3cg"
                        >
                          Correo electrónico
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input 
                          type="password" 
                          id="form3Example4cg" 
                          className="form-control form-control-lg" 
                        />
                        <label 
                          className="form-label" 
                          htmlFor="form3Example4cg"
                        >
                          Contraseña
                        </label>
                      </div>

                    

                      <div className="d-flex justify-content-center">
                        <button 
                          type="button" 
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" 
                        >
                          Iniciar sesión
                        </button>
                      </div>
                      <p className="text-center text-muted mt-5 mb-0">
                        ¿No tienes cuenta? 
                        <Link to="/register" className="fw-bold text-body"><u>Crea una cuenta aquí</u></Link> 
                      </p> 

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;