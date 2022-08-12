import React from "react";
import "./Profile.css";
import ProfileDetails from "./ProfileDetails";
import cssLogo from "../../assets/css-logo.png";
import reactLogo from "../../assets/react-logo.png";
import javascriptLogo from "../../assets/js-logo.png";
import htmlLogo from "../../assets/html-logo.png";
import reactNativeLogo from "../../assets/react-native-logo.png";

const Profile = () => {
  return (
    <div className="profile-container" id="home">
      <div className="profile-picture-container">
        <div className="profile-picture">
          <div className="profile-picture-background">
            <img src={cssLogo} alt="" className="cssLogo"/>
            <img src={reactLogo} alt="" className="reactLogo"/>
            <img src={javascriptLogo} alt="" className="javascriptLogo"/>
            <img src={htmlLogo} alt="" className="htmlLogo"/>
            <img src={reactNativeLogo} alt="" className="reactNativeLogo"/>
          </div>
        </div>
      </div>
      <ProfileDetails/>
    </div>
  )
}

export default Profile
