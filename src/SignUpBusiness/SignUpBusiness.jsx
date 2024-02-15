import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUpBusiness = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    registered: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, name, password } = formData;
    try {
      const response = await fetch('http://localhost:8080/tuCafe/v1/client/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (response.ok) {
        toast.success('¡Registro de negocio exitoso! Redirigiendo al inicio de sesión.');
        setFormData({ ...formData, registered: true });
      } else {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error('Error al conectar con el backend', error);
      toast.error('Error al registrar el negocio. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="book1">
      <h2 className="heading">Registrar Negocio</h2>
      <form className='formL reserva-f' onSubmit={handleSubmit}>
        <label htmlFor="businessName" className="boxUS">
          Nombre del negocio:
          <input
            type="text"
            id="businessName"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="box1"
          />
        </label>

        <label htmlFor="businessEmail" className="boxUS">
          Correo electrónico del negocio:
          <input
            type="email"
            id="businessEmail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="box1"
          />
        </label>

        <label htmlFor="businessPassword" className="boxUS">
          Contraseña del negocio:
          <input
            type="password"
            id="businessPassword"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="box1"
          />
        </label>

        <button type="submit" className="btn">
          Registrar Negocio
        </button>
      </form>
      <div className='registro'>
        ¿Ya tienes una cuenta de negocio?{' '}
        <Link to="/login">
          <u><b>Inicia sesión aquí</b></u>
        </Link>
      </div>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
};

export default SignUpBusiness;
