import React from "react";

const CategoryCard = ({ cardTitle, cardImage }) => {
  return (
    <div className="card card-only-image card-hover">
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
    </div>
  );
};

export default CategoryCard;
