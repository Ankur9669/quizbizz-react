import React, { useEffect } from "react";
import { Navbar, Sidebar, HeroSection, useDocumentTitle } from "./index";
import "./homepage.css";

const Homepage = () => {
  useEffect(() => {
    useDocumentTitle("QuizBizz-Home");
  }, []);
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <Sidebar />
        <HeroSection />
      </div>
    </div>
  );
};

export default Homepage;
