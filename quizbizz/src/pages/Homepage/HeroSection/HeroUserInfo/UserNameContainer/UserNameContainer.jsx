import React from "react";
import Avatar from "../../Avatar/Avatar";
import Avatar1 from "../../../../../assets/images/male-avatar.svg";

const UserNameContainer = () => {
  return (
    <div className="user-name-container">
      <p className="font-large weight-semi-bold primary-text-color">
        Ankur Gupta
      </p>
      <p className="font-medium weight-semi-bold primary-text-color">
        gankur860@gmail.com
      </p>
      {/* <!--  ******************************** Small Avatar on right for tablet and mobile ********************************  --> */}
      <Avatar
        parentContainerClassName="hero-user-image-container-sm"
        Avatar={Avatar1}
        avatarClassName="img-round img-responsive avatar"
      />
    </div>
  );
};

export default UserNameContainer;
