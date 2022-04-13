import React from "react";
import "./herouserinfo.css";
import UserNameContainer from "./userNameContainer/UserNameContainer";
import UserProgressContainer from "./userProgressContainer/UserProgressContainer";

const HeroUserInfo = () => {
  return (
    <div className="hero-user-info-container">
      <UserNameContainer />
      <UserProgressContainer />
    </div>
  );
};

export default HeroUserInfo;
