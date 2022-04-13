import React from "react";
import "./herosection.css";
import Avatar1 from "../../../assets/images/male-avatar.svg";
import HeroUserInfo from "./heroUserInfo/HeroUserInfo";
import Avatar from "./avatar/Avatar";
import AcheivementCategorySection from "../acheivementCategorySection/AcheivementCategorySection";

const HeroSection = () => {
  return (
    <div className="col-2 hero-section-container">
      <div className="hero-section">
        {/* <!--  ******************************** Large Avatar on left for desktop ********************************  --> */}
        <Avatar
          parentContainerClassName="hero-user-image-container-lg"
          Avatar={Avatar1}
          avatarClassName="img-round img-responsive avatar"
        />
        <HeroUserInfo />
      </div>
      <AcheivementCategorySection />
    </div>
  );
};

export default HeroSection;
