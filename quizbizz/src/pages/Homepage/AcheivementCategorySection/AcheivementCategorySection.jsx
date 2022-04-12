import React from "react";
import "./acheivement-category-section.css";
import Acheivements from "./Acheivements/Acheivements";
import Categories from "./Categories/Categories";

const AcheivementCategorySection = () => {
  return (
    <div className="acheivements-featured-category-container grid-50-50">
      <Acheivements />
      <Categories />
    </div>
  );
};

export default AcheivementCategorySection;
