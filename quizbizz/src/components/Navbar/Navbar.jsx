import React from "react";
import "./navbar.css";
import Avatar from "../../assets/images/male-avatar.svg";
import { AiOutlineMenu } from "../../assets/icons/icons";
import QuizBizz from "../../assets/images/quiz-bizz.svg";
import PrimaryButton from "../../components/Buttons/PrimaryButton";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        {/* <i className="fa fa-bars hamburger-icon" aria-hidden="true"></i>
         */}
        <AiOutlineMenu className="hamburger-icon" />
      </div>
      <div className="logo-container margin-horizontal-lg">
        <div className="logo">
          <img src={QuizBizz} alt="quizbizz" className="logo-image" />
          <span className="logo-text">Quiz</span>
          <span className="primary-color">Bizz</span>
        </div>
      </div>
      <div className="nav-items-container-end">
        <div className="login-search-bar-container">
          <PrimaryButton buttonText="Login" />

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
