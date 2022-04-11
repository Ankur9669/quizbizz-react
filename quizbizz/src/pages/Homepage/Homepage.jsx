import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import HeroSection from "./HeroSection/HeroSection";
import "./homepage.css";

const Homepage = () => {
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
