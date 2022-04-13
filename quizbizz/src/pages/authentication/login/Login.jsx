import React from "react";
import {
  Navbar,
  useDocumentTitle,
  AuthenticationBackground,
  LoginImage,
  Loginform,
} from "./index";

const Login = () => {
  useDocumentTitle("QuizBizz-Login");
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
};

export default Login;
