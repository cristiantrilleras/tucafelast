import { cafes } from '../Conts/Conts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMugHot, faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Perfil.css';


const Perfil = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleLogout = () => {
    // Aquí puedes realizar cualquier acción necesaria para cerrar la sesión
    setIsLoggedIn(false);
    // Ocultar el pop-up después de cerrar sesión
    setShowLogoutPopup(false);
  };

  const handleClick = () => {
    const $bar = document.querySelector(".navbar")
    $bar.classList.toggle("open")
    $bar.classList.toggle("closed", $bar.classList.contains("open"))
  }

  return (
    <>
      {showLogoutPopup && (
        <div className="logout-popup">
          <p>¿Estás seguro de que deseas cerrar sesión?</p>
          <button onClick={handleLogout}>Sí, cerrar sesión</button>
          <button onClick={() => setShowLogoutPopup(false)}>Cancelar</button>
        </div>
      )}

      <header className="header">
        <div>
          <button onClick={handleClick} id="menu-btn">
            <FontAwesomeIcon icon={faBars} />
          </button>

          <a href="#" className="logo">
            <FontAwesomeIcon icon={faMugHot} /> TuCafé
          </a>
        </div>
        <nav className="navbar">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/lugares">Lugares</NavLink>
          <NavLink to="/acerca">Nosotros</NavLink>
          <NavLink to="/opiniones">Reseñas</NavLink>
          <NavLink to="/reserva">Reservas</NavLink>
        </nav>

        <div className="search-bar">
          <input type="text" id="search-input" placeholder="Buscar Lugar..." />
          <button id="search-btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

      {/* Botones de registro y salida */}
      <li>
          <NavLink to="/SignUp" className="btn-header">Registro</NavLink>
          {isLoggedIn ? (
            <button className="btn-header" onClick={() => setShowLogoutPopup(true)}>Salir</button>
          ) : (
            <NavLink to="/login" className="btn-header">Iniciar sesión</NavLink>
          )}
        </li>

        
      </header>

      <section className="home" id="home">
        <div className="row">
          <div className="content">
            <h3 className="letra">
              esta es una prueba para cuando el usuario esta logueado
            </h3>
            <a href="#menu" className="btn-about">
              Cafeterías en el <br /> encantador Quindío
            </a>
          </div>

          <div className="image">
            <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/tn273iuby9xxzjvar07k" className="main-home-image" alt="" />
          </div>
        </div>

        <div className="image-slider">
          <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/tn273iuby9xxzjvar07k" alt="" />
          <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/rdvteijamuubi7movsux" alt="" />
          <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/prrh7u9m6wczw928mmwo" alt="" />
        </div>
      </section>


      {/* en esta parte esta el codigo de cafes */}


      <section className="menu" id="menu">
        <h1 className="heading">Lugares más populares</h1>

        <div className="box-container">

          {
            cafes.map((cafe, index) => {
              return (

                <div className="box" key={index}> {/* segundo casilla del cafe */}

                  <div className="content">
                    <h3>{cafe.titulo}</h3>
                    <br />
                    <div className="image-gallery">
                      <img src={cafe.imagen} alt="" />
                    </div>
                    <p>{cafe.mensaje}</p>
                    <NavLink to={cafe.ruta} className="btn-link">
                      <button className="btn">Ver más</button>
                    </NavLink>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>

  

      {/* antigua seccion about */}


      <section className="book" id="book">
        <h1 className="heading">Reserva <span>tu lugar Favorito</span></h1>
        <form action="" className='reserva-f'>
          <div className="search-bar1">
            <input type="text" id="search-input" placeholder="Buscar Lugar..." className="box" />
          </div>
          <input type="text" placeholder="Nombre" className="box" />
          <input type="email" placeholder="Email" className="box" />
          <input type="number" placeholder="Contacto" className="box" />
          <textarea
            name=""
            placeholder="Mensaje"
            className="box"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" value="Enviar" className="btn" />
        </form>
      </section>
    </>
  );
};

export default Perfil;