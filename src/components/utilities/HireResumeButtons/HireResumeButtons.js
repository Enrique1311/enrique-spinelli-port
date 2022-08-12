import React from "react";
import MyButton from "../Button/MyButton";
import "./HireResumeButtons.css";

const HireResumeButtons = () => {

  return (
    <div className="hire-resume-buttons" data-aos="zoom-in">
        <a href="/#contact-me">
            <MyButton>
              Contrátame
            </MyButton> 
        </a>
        <a href="CV-Enrique-Spinelli.pdf" download="CV-Enrique-Spinelli.pdf">
            <MyButton>
              Obtener CV
            </MyButton>
        </a>    
    </div>    
  )
}

export default HireResumeButtons;
