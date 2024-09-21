import React from "react";

const NavBar = () => {
  return (
    <nav className="navBar">
      <ul>
        <li><a className="active" href="#inicio">Inicio</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
