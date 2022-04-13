import React from "react";
import "./acheivement-category-section.css";
import Acheivements from "./acheivements/Acheivements";
import Categories from "./categories/Categories";

const AcheivementCategorySection = () => {
  return (
    <div className="acheivements-featured-category-container grid-50-50">
      <Acheivements />
      <Categories />
    </div>
  );
};

export default AcheivementCategorySection;
