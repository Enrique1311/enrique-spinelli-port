import React from "react";
import Typical from "react-typical";
import "./ProfileDetails.css";
import SocialNetworks from "../utilities/SocialNetworks/SocialNetworks";
import HireResumeButtons from "../utilities/HireResumeButtons/HireResumeButtons";

const ProfileDetails = () => {
    return (
        <div className="profile-details">
            <SocialNetworks/>
            <div className="profile-details-name">
                <span className="primary-text">
                    {" "}
                    ¡Hola! Soy <span className="name-text">Enrique J. Spinelli</span>
                </span>
            </div>
            <div className="profile-details-role">
                <span className="primary-text">
                    {" "}
                    <h1>
                        {" "}
                        <Typical 
                        loop={Infinity}
                        steps={[
                            "Full Stack",
                            1000,
                            "Html",
                            1000,
                            "Css",
                            1000,
                            "Javascript",
                            1000,
                            "React Js",
                            1000,
                            "Next Js",
                            1000,
                            "React Native",
                            1000,
                        ]}
                    />  
                    </h1>
                    <p className="profile-extra">
                        Desarrollador de aplicaciones web Frontend y Backend y para celulares.
                    </p>
                </span>              
            </div>
            <HireResumeButtons/>
        </div>
    )
}

export default ProfileDetails
