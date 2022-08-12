import React from "react";
import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li onClick={() => props.isMovileNav && props.closeMovileNav()}>
        <a href="/#home" className="selected">Inicio</a>
      </li>
      <li onClick={() => props.isMovileNav && props.closeMovileNav()}>
        <a href="/#about-me" className="selected">Sobre mí</a>
      </li>          
      <li onClick={() => props.isMovileNav && props.closeMovileNav()}>
        <a href="/#resume" className="selected">Resumen</a>
      </li>  
      <li onClick={() => props.isMovileNav && props.closeMovileNav()}>
        <a href="/#proyects" className="selected">Proyectos</a>
      </li>        
      <li onClick={() => props.isMovileNav && props.closeMovileNav()} >
        <a href="/#contact-me" className="selected">Contáctame</a>
      </li>          
    </ul>
  )
}

export default NavLinks
