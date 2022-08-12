import React from "react";
import "./Proyects.css";
import Subtitle from "../utilities/Subtitle/Subtitle";
import ProyectsCards from "./ProyectsCards";

const Proyects = () => {

  return (
    <div className="proyects-container" id="proyects">
      <Subtitle>Proyectos</Subtitle>
        <div className="proyects" data-aos="zoom-in">
          <ProyectsCards/>
        </div>
    </div>
  )
}

export default Proyects
