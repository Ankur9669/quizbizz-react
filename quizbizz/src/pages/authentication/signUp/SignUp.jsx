import React from "react";
import "../authentication.css";
import {
  SignupForm,
  SignUpImage,
  AuthenticationBackground,
  useDocumentTitle,
  Navbar,
} from "./index";

const SignUp = () => {
  useDocumentTitle("QuizBizz-SignUp");
  return (
    <div>
      <Navbar />
      <div className="spacer-3"></div>
      <div className="wrapper">
        <AuthenticationBackground />
        <div className="authentication">
          <div className="authentication-image-container">
            <img src={SignUpImage} alt="signup-image" />
          </div>
          <SignupForm />
        </div>
      </div>
      <div className="spacer-3"></div>
    </div>
  );
};

export default SignUp;
