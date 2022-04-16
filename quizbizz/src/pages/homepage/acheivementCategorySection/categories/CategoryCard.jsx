import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ cardTitle, cardImage }) => {
  return (
    <Link to="/quizinstruction" className="card card-only-image card-hover">
      <div className="text-overlay">
        <p className="font-medium-large weight-semi-bold">{cardTitle}</p>
      </div>
      <div className="image-container">
        <img
          alt={cardTitle}
          src={cardImage}
          className="img-responsive"
          loading="lazy"
        />
      </div>
    </Link>
  );
};

export default CategoryCard;
