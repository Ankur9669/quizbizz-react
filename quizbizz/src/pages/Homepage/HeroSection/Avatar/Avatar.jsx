import React from "react";
import "./avatar.css";

const Avatar = ({ parentContainerClassName, Avatar, avatarClassName }) => {
  return (
    <div className={parentContainerClassName}>
      <img src={Avatar} alt="user" className={avatarClassName} />
    </div>
  );
};

export default Avatar;
