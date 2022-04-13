import React from "react";
import ProgressItem from "./ProgressItem";
import "./user-progress-container.css";
import {
  FaFlag,
  MdOutlineWatchLater,
  FaCheck,
} from "../../../../../assets/icons/icons";

const UserProgressContainer = () => {
  return (
    <div className="user-progress-container">
      <ProgressItem
        progressItemTitle="0"
        progressItemSubTitle="Challenge Completed"
        progressItemIcon={FaFlag}
      />

      <ProgressItem
        progressItemTitle="0"
        progressItemSubTitle="Minutes Played"
        progressItemIcon={MdOutlineWatchLater}
      />

      <ProgressItem
        progressItemTitle="0"
        progressItemSubTitle="Correct Answers"
        progressItemIcon={FaCheck}
      />
    </div>
  );
};

export default UserProgressContainer;
