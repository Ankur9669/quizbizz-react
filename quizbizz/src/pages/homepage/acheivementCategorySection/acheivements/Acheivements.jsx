import React from "react";
import "./acheivements.css";
import SilverTrophy from "../../../../assets/images/silver-trophy.png";
import StarTrophy from "../../../../assets/images/badge.png";
import GoldTrophy from "../../../../assets/images/star-trophy.png";

const Acheivements = () => {
  return (
    <div className="acheivements-container wrapper">
      <p className="font-large weight-semi-bold primary-text-color acheivements-featured-category-heading">
        Acheivements
      </p>

      <div className="acheivements-badges-container">
        <div className="acheivement-badge-container">
          <img
            src={SilverTrophy}
            alt="silver-trophy"
            className="img-responsive acheivement-badge"
          />
          <p className="font-medium weight-normal primary-text-color centered-text margin-vertical-xs">
            Silver
          </p>
        </div>
        <div className="acheivement-badge-container">
          <img
            src={StarTrophy}
            alt="badge"
            className="img-responsive acheivement-badge"
          />
          <p className="font-medium weight-normal primary-text-color centered-text margin-vertical-xs">
            Achiver
          </p>
        </div>
      </div>
      <div className="spacer-2"></div>
      <div className="acheivements-badges-container">
        <div className="acheivement-badge-container">
          <img
            src={GoldTrophy}
            alt="badge"
            className="img-responsive acheivement-badge"
          />
          <p className="font-medium weight-normal primary-text-color centered-text margin-vertical-xs">
            Gold
          </p>
        </div>
      </div>
      <div className="spacer-2"></div>
    </div>
  );
};

export default Acheivements;
