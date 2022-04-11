import React from "react";
import Avatar from "../Avatar/Avatar";
import Avatar1 from "../../../../assets/images/male-avatar.svg";
import "./herouserinfo.css";
import UserNameContainer from "./UserNameContainer/UserNameContainer";
import UserProgressContainer from "./UserProgressContainer/UserProgressContainer";

const HeroUserInfo = () => {
  return (
    <div className="hero-user-info-container">
      <UserNameContainer />
      <UserProgressContainer />
    </div>
  );
};

export default HeroUserInfo;
