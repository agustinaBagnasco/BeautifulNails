import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
  <nav>
    <ul className="nav nav-pills nav-fill navbar">
      <li className="nav-item">
        <Link className="nav-link" to="/">INICIO</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Disenios">DISE&Ntilde;OS</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Novedades">NOVEDADES</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Contacto">CONTACTO</Link>
      </li>
    </ul>

  </nav>
 
  </>
);
}


export default Navbar