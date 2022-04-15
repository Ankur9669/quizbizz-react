import React, { useState } from "react";
import "../authentication.css";
import {
  AiOutlineMail,
  AiFillEyeInvisible,
  AiFillEye,
  PrimaryButton,
  SecondaryButton,
  Link,
  postApi,
  useToast,
  useUser,
  useNavigate,
} from "./index";

const SignupForm = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const { dispatchUser } = useUser();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const onSubmitForm = (e) => {
    //TODO VALIDATIONS
    e.preventDefault();

    if (
      formDetails.email === "" ||
      formDetails.firstName === "" ||
      formDetails.lastName === "" ||
      formDetails.password === ""
    ) {
      showToast("Please Enter the details first", "ERROR");
      return;
    }
    signUpUser();
  };

  const signUpUser = async () => {
    const { data, success, message, statusCode } = await postApi(
      "/api/auth/signup",
      {
        firstName: formDetails.firstName,
        lastName: formDetails.lastName,
        email: formDetails.email,
        password: formDetails.password,
      },
      false
    );

    if (success && statusCode === 201) {
      const token = data.encodedToken;
      localStorage.setItem("token", token);

      dispatchUser({
        type: "LOGIN",
        payload: { value: data.createdUser },
      });
      showToast("Signup successfull", "SUCCESS");
      navigate("/");
    } else {
      showToast("Something Went wrong", "ERROR");
    }
  };

  return (
    <div className="authentication-form-container">
      <form className="authentication-form" onSubmit={onSubmitForm}>
        <h2 className="font-large weight-semi-bold authentication-form-heading">
          <span className="logo-text font-large">Quiz</span>
          <span className="primary-color font-large">Bizz</span>
        </h2>
        <p className="font-medium-large weight-semi-bold authentication-form-sub-heading">
          REGISTER WITH US
        </p>
        <div className="form-input-box">
          <input
            type="text"
            placeholder="First Name"
            value={formDetails.firstName}
            onChange={(e) =>
              setFormDetails({ ...formDetails, firstName: e.target.value })
            }
            required
          />
        </div>

        <div className="form-input-box">
          <input
            type="text"
            placeholder="Last Name"
            value={formDetails.lastName}
            onChange={(e) =>
              setFormDetails({ ...formDetails, lastName: e.target.value })
            }
            required
          />
        </div>

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

        <PrimaryButton
          buttonText="Create New Account"
          className="form-cta-button"
          // onClick={(e) => onSubmitForm(e)}
          type="submit"
        />

        <Link to="/login">
          <SecondaryButton
            buttonText="Already have an account!!!"
            className="form-cta-button"
          />
        </Link>
      </form>
    </div>
  );
};

export default SignupForm;
