import React from "react";
import "./navbar.css";
import { Avatar, AiOutlineMenu, QuizBizz, PrimaryButton, Link } from "./index";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <AiOutlineMenu className="hamburger-icon" />
      </div>
      <div className="logo-container">
        <div className="logo">
          <img src={QuizBizz} alt="quizbizz" className="logo-image" />
          <span className="logo-text">Quiz</span>
          <span className="logo-sub-text primary-color">Bizz</span>
        </div>
      </div>
      <div className="nav-items-container-end">
        <div className="login-search-bar-container">
          <Link to="/login">
            <PrimaryButton buttonText="Login" />
          </Link>

          <div className="input-box">
            <input
              type="search"
              className="input simple-input nav-searchbar"
              placeholder="Search.."
            />
          </div>
        </div>

        <div className="navbar-icons-container">
          <img src={Avatar} alt="user" className="img-round avatar" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
