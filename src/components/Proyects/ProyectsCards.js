import React from "react";
import "./ProyectsCards.css";
import img1 from "../../assets/christopher-gower-m_HRfLhgABo-unsplash.jpg";
import img2 from "../../assets/farzad-nazifi-p-xSl33Wxyc-unsplash.jpg";
import img3 from "../../assets/nathan-da-silva-k-rKfqSm4L4-unsplash.jpg";
import img4 from "../../assets/hal-gatewood-tZc3vjPCk-Q-unsplash.jpg"
import MyButton from "../utilities/Button/MyButton";

const ProyectsCards = () => {

    const proyectsData = [
        {   
            id: "0",
            title: "My Portfolio",
            img: img1,
            description: "Este es mi Portfolio personal realizado con ReactJS y Css.",
            url: ""
        },
        { 
            id: "1",
            title: "Calculadora",
            img: img2,
            description: "Sitio web realizado con ReactJs, NextJs y Css.",
            url:""
        },
        { 
            id: "2",
            title: "Movie App",
            img: img3,
            description: "Aplicacion web de películas realizado con ReactJs y Css",
            url: "https://movie-searcher-react.netlify.app/"
        },
        { 
            id: "3",
            title: "Ecommerce",
            img: img4,
            description: "Ecommerce con React Native y Redux",
            url: ""
        }
    ];
    
    return (
        <div className="cards-container">      
            {proyectsData.map((data) => {
                return (
                    <div className="proyects-cards" key={data.id} data={data}>
                        <div className="card" data-aos="zoom-in">
                            <img src={data.img} alt="" className="card-image"/>
                            <div className="card-details">
                                <h4 className="card-title">
                                    {data.title}
                                </h4>
                                <p className="card-description">
                                    {data.description}
                                </p> 
                                <a href={data.url}>
                                    <MyButton>
                                        Ver sitio
                                    </MyButton>                                          
                                </a>                                                                                             
                            </div>
                        </div>  
                    </div>
                );
            })}
        </div>
    )
}

export default ProyectsCards
