import React from "react";
import Navbar from "../../../components/navbar/Navbar";
// import { useDocumentTitle } from "../../../Util/change-document-title";
import AuthenticationBackground from "../AuthenticationBackground";
import Loginform from "./Loginform";
import LoginImage from "../../../assets/images/quizbizz-login.svg";

function Login() {
  // useDocumentTitle("FiTbiT-Login");
  return (
    <div>
      <Navbar />
      <div className="spacer-3"></div>
      <div className="wrapper">
        <AuthenticationBackground />
        <div className="authentication login">
          <div className="authentication-image-container">
            <img src={LoginImage} alt="login-image" />
          </div>
          <Loginform />
        </div>
      </div>
      <div className="spacer-3"></div>
    </div>
  );
}

export default Login;
