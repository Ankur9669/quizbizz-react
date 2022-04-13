import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import "../authentication.css";
import SignupForm from "./SignupForm";
import AuthenticationBackground from "../AuthenticationBackground";
import SignUpImage from "../../../assets/images/quizbizz-signup.svg";
import { useDocumentTitle } from "../../../util/change-document-title";

function SignUp() {
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
}

export default SignUp;
