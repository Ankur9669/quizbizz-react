import React from "react";
import "./acheivement-category-section.css";
import Acheivements from "./Acheivements/Acheivements";

const AcheivementCategorySection = () => {
  return (
    <div className="acheivements-featured-category-container grid-50-50">
      <Acheivements />

      {/* <!--  ******************************** Categories Start ********************************  --> */}
      <div className="categories-container wrapper">
        <p className="font-large weight-semi-bold primary-text-color acheivements-featured-category-heading">
          Categories
        </p>

        <div className="categories-cards-container">
          {/* <!--********************* Javascript Card Start ********************* --> */}
          <a href="quizinstruction.html">
            <div className="card card-only-image card-hover">
              <div className="text-overlay">
                <p className="font-medium-large weight-semi-bold">Javascript</p>
              </div>
              <div className="image-container">
                <img
                  alt="Javascript"
                  src="images/javascript.png"
                  className="img-responsive"
                  loading="lazy"
                />
              </div>
            </div>
          </a>

          {/* <!--********************* Javascript Card End ********************* --> */}

          {/* <!--********************* CSS Card Start ********************* --> */}
          <a href="quizinstruction.html">
            <div className="card card-only-image card-hover">
              <div className="text-overlay">
                <p className="font-medium-large weight-semi-bold">CSS</p>
              </div>
              <div className="image-container">
                <img
                  alt="css"
                  src="images/css.png"
                  className="img-responsive"
                  loading="lazy"
                />
              </div>
            </div>
          </a>
          {/* <!--********************* CSS card end ********************* --> */}
        </div>

        <div className="categories-cards-container">
          {/* <!--********************* Javascript Card Start ********************* --> */}
          <a href="quizinstruction.html">
            <div className="card card-only-image card-hover">
              <div className="text-overlay">
                <p className="font-medium-large weight-semi-bold">Javascript</p>
              </div>
              <div className="image-container">
                <img
                  alt="card-image"
                  src="images/javascript.png"
                  className="img-responsive"
                  loading="lazy"
                />
              </div>
            </div>
          </a>
          {/* <!--********************* Javascript Card End ********************* --> */}

          {/* <!--********************* CSS Card Start ********************* --> */}
          <a href="quizinstruction.html">
            <div className="card card-only-image card-hover">
              <div className="text-overlay">
                <p className="font-medium-large weight-semi-bold">CSS</p>
              </div>
              <div className="image-container">
                <img
                  alt="card-image"
                  src="images/javascript.jpg"
                  className="img-responsive"
                  loading="lazy"
                />
              </div>
            </div>
          </a>

          {/* <!--********************* CSS card end ********************* --> */}
        </div>
        <div className="spacer-2"></div>
      </div>
      {/* <!--  ******************************** Categories End ********************************  --> */}
    </div>
  );
};

export default AcheivementCategorySection;
