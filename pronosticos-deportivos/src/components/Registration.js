import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de registro (e.g., enviar datos al servidor)
    console.log(formData); // Imprimir los datos del formulario en la consola
  };

  return (
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
                  <h2 className="text-uppercase text-center mb-5">Crear una cuenta</h2>

                  <form onSubmit={handleSubmit}> 
                    <div className="form-outline mb-4">
                      <input 
                        type="text" 
                        id="form3Example1cg" 
                        className="form-control form-control-lg" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                      />
                      <label className="form-label" htmlFor="form3Example1cg">Nombre</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input 
                        type="email" 
                        id="form3Example3cg" 
                        className="form-control form-control-lg" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                      />
                      <label className="form-label" htmlFor="form3Example3cg">Correo electrónico</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input 
                        type="password" 
                        id="form3Example4cg" 
                        className="form-control form-control-lg" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                      />
                      <label className="form-label" htmlFor="form3Example4cg">Contraseña</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input 
                        type="password" 
                        id="form3Example4cdg" 
                        className="form-control form-control-lg" 
                        name="confirmPassword" 
                        value={formData.confirmPassword} 
                        onChange={handleChange} 
                      />
                      <label className="form-label" htmlFor="form3Example4cdg">Repite tu contraseña</label>
                    </div>

                    {/* ... (opcional: checkbox) ... */}

                    <div className="d-flex justify-content-center">
                      <button 
                        type="submit" 
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" 
                      >
                        Finalizar registro!
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Ya tienes cuenta? 
                      <a href="#!" className="fw-bold text-body"><u>Inicia sesión</u></a>
                    </p>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;