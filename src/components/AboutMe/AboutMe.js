import React from "react";
import "./AboutMe.css";
import Subtitle from "../utilities/Subtitle/Subtitle";
import HireResumeButtons from "../utilities/HireResumeButtons/HireResumeButtons";

const AboutMe = () => {

  return (
    <div className="about-me-container" id="about-me">
      <Subtitle>Sobre mí</Subtitle>
      <div className="about-me" data-aos="zoom-in">
        <div className="about-me-photo" data-aos="zoom-in">
        </div>
        <div className="about-me-details">
          <div className="about-me-details-content" data-aos="zoom-in">
            <h2>
              ¿Por qué elegirme?
            </h2>
            <p>
              Estudié la carrera de Full Stack Developer en 
              Numen Academy en la ciudad de Buenos Aires. 
              Amo la programación. Preparado para enfrentar 
              todo tipo de desafíos creando sitios web ágiles, 
              intuitivos, modernos, visualmente atractivos 
              y adaptables a todos los dispositivos.
              ¡Me esfuerzo por ser original!
            </p>         
            <p>
              Mis trabajos apuntan a:
            </p>
            <p>
              Realizar todo lo nacesario para que mis clientes
              cumplan todas sus metas y aspiraciones.
            </p>
            <p>
              Que los usuarios tengan una experiencia placentera, 
              distinta e intuitiva.             
            </p>
          </div>         
          <HireResumeButtons className="about-me-button"/>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
