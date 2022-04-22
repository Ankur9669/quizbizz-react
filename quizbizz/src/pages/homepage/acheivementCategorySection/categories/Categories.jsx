import React from "react";
import "./categories.css";
import {
  CategoryCard,
  JavaScriptImage,
  CssImage,
  JavaImage,
  ReactImage,
} from "./index";

const Categories = () => {
  return (
    <div className="categories-container wrapper">
      <p className="font-large weight-semi-bold primary-text-color acheivements-featured-category-heading">
        Categories
      </p>
      <div className="categories-cards-container">
        <CategoryCard
          cardTitle="Javascript"
          cardImage={JavaScriptImage}
          quizId="1"
        />
        <CategoryCard cardTitle="CSS" cardImage={CssImage} quizId="2" />
      </div>
      <div className="categories-cards-container">
        <CategoryCard cardTitle="React" cardImage={ReactImage} quizId="3" />
        <CategoryCard cardTitle="Java" cardImage={JavaImage} quizId="4" />
      </div>
      <div className="spacer-2"></div>
    </div>
  );
};

export default Categories;
