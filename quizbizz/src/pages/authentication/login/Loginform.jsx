import React, { useState } from "react";
import {
  AiOutlineMail,
  AiFillEyeInvisible,
  AiFillEye,
  PrimaryButton,
  SecondaryButton,
  Link,
  useNavigate,
  useUser,
  useToast,
  postApi,
  useLocation,
} from "./index";

const Loginform = () => {
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const { dispatchUser } = useUser();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const onSubmitForm = (e) => {
    //TODO VALIDATIONS
    e.preventDefault();
    loginUser();
  };
  const loginUser = async () => {
    if (formDetails.email === "" || formDetails.password === "") {
      showToast("Please Enter the details first", "ERROR");
      return;
    }

    const { data, success, message, statusCode } = await postApi(
      "/api/auth/login",
      {
        email: formDetails.email,
        password: formDetails.password,
      },
      false
    );

    if (success && statusCode === 200) {
      const token = data.encodedToken;
      localStorage.setItem("token", token);
      dispatchUser({
        type: "LOGIN",
        payload: { value: data.foundUser },
      });
      showToast("Login successfull", "SUCCESS");
      navigate(from);
    } else {
      showToast("Something Went wrong", "ERROR");
    }
  };

  const loginAsGuest = async (e) => {
    e.preventDefault();
    const { data, success, message, statusCode } = await postApi(
      "/api/auth/login",
      {
        email: "adarshbalika@gmail.com",
        password: "adarshBalika123",
      },
      false
    );

    if (success && statusCode === 200) {
      const token = data.encodedToken;
      localStorage.setItem("token", token);
      dispatchUser({
        type: "LOGIN",
        payload: { value: data.foundUser },
      });
      showToast("Login successfull", "SUCCESS");
      navigate(from);
    } else {
      showToast("Something Went wrong", "ERROR");
    }
  };

  return (
    <div className="authentication-form-container">
      <form className="authentication-form">
        <h2 className="font-large weight-semi-bold authentication-form-heading">
          <span className="logo-text font-large">Quiz</span>
          <span className="primary-color font-large">Bizz</span>
        </h2>
        <p className="font-medium-large weight-semi-bold authentication-form-sub-heading">
          LOGIN INTO YOUR ACCOUNT
        </p>
        <div className="form-input-box">
          <input
            type="email"
            placeholder="Email Address"
            value={formDetails.email}
            onChange={(e) =>
              setFormDetails({ ...formDetails, email: e.target.value })
            }
            required
          />
          <AiOutlineMail className="mail-icon" />
        </div>
        <div className="form-input-box">
          <input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
            value={formDetails.password}
            onChange={(e) =>
              setFormDetails({ ...formDetails, password: e.target.value })
            }
            required
          />
          {isPasswordVisible ? (
            <AiFillEye
              className="mail-icon"
              onClick={() => setPasswordVisible((prev) => !prev)}
            />
          ) : (
            <AiFillEyeInvisible
              className="mail-icon"
              onClick={() => setPasswordVisible((prev) => !prev)}
            />
          )}
        </div>
        <div className="checkbox-container">
          <span>
            <input type="checkbox" value="Remember Box" id="remember-box" />
            <label
              htmlFor="remember-box"
              className="font-medium remember-me-checkbox"
            >
              Remember Me
            </label>
          </span>
          <Link to="/" className="forgot-password-btn font-medium">
            Forgot Password
          </Link>
        </div>

        <PrimaryButton
          buttonText="Login As Guest"
          className="form-cta-button"
          onClick={(e) => loginAsGuest(e)}
        />

        <PrimaryButton
          buttonText="Login"
          className="form-cta-button"
          onClick={(e) => onSubmitForm(e)}
        />

        <Link to="/signup">
          <SecondaryButton
            buttonText="SignUp With Us"
            className="form-cta-button"
          />
        </Link>
      </form>
    </div>
  );
};

export default Loginform;
