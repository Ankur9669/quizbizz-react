import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import HeroSection from "./heroSection/HeroSection";
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
