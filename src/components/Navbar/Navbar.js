import React from "react";
import MovileNav from "./MovileNav";
import NormalNav from "./NormalNav";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <a href="/#home">
          <h1>EJS Coder</h1>
        </a>
      </div>
      <MovileNav/>
      <NormalNav/>
    </div>

  )
}

export default Navbar
