import React from 'react';
import { NavLink, useHistory } from 'react-router-dom'; // Importa useHistory
import { cafes } from '../Conts/Conts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMugHot, faSearch } from '@fortawesome/free-solid-svg-icons';

const Perfil = () => {
  const history = useHistory(); // Obtén el objeto history

  const handleLogout = () => {
    // Aquí deberías realizar cualquier limpieza de datos de sesión
    // Por ejemplo, eliminar tokens de autenticación, cookies de sesión, etc.
    // Puedes usar localStorage.removeItem('token') o cualquier otro método que uses para almacenar datos de sesión

    // Redirige al usuario a la página de inicio de sesión o a la página principal
    history.push('/login');
  };

  function handleClick() {
    const $bar = document.querySelector(".navbar")
    $bar.classList.toggle("open")
    $bar.classList.toggle("closed", $bar.classList.contains("open"))
  }

  return (
    <>
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


        <li>
          <NavLink to="/login" className="btn-header">
            Acceder
          </NavLink>
          <NavLink to="/" className="btn-header">
            LOGOUT
          </NavLink>
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

      {/* comentario de las personas */}

      {/* antigua seccion about */}

      {/* " QUIENE SOMOS "" */}

      <section className="review" id="review">
        <h1 className="heading">Opiniones <span>Lo que Dicen los Clientes</span></h1>

        <div className="swiper review-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide box">

              <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/iltlvdwpu7rfjsxhs78c" alt="" />
              <div className="stars">

              </div>
              <p>sit amet, consectetur adipisicing elit. Quo, earum quis dolorem quaerat tenetur illum.</p>
              <h3>John Doe</h3>
              <span>Satisfied Client</span>
            </div>

            <div className="swiper-slide box">

              <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/ifdsxghyyadcpggqy1tm" alt="" />

              <p>sit amet consectetur adipisicing elit. Rerum optio quasi ut, illo ipsam assumenda.</p>
              <h3>John Doe</h3>
              <span>Satisfied Client</span>
            </div>

            <div className="swiper-slide box">

              <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/fnstz7ftrcldpbfeu57r" alt="" />

              <p>sit amet consectetur adipisicing elit. Eius asperiores aliquam hic quis! Eligendi, aliquam.</p>
              <h3>John Doe</h3>
              <span>Satisfied Client</span>
            </div>

            <div className="swiper-slide box">

              <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/yoc39uejzlse2uzfppxd" alt="" />
              <p>sit amet consectetur adipisicing elit. Eligendi modi perspiciatis distinctio velit aliquid a.</p>
              <h3>John Doe</h3>
              <span>Satisfied Client</span>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </section>

      {/* en esta parte esta el codigo de reserva */}

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
