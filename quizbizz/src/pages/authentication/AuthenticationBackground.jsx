import React from "react";
import "./authentication.css";
import BackgroundBlob from "../../assets/images/blob.svg";

function AuthenticationBackground() {
  return (
    <>
      <img src={BackgroundBlob} className="blob blob1" alt="top-left-blob" />
      <img
        src={BackgroundBlob}
        className="blob blob2"
        alt="bottom-right-blob"
      />
    </>
  );
}

export default AuthenticationBackground;
