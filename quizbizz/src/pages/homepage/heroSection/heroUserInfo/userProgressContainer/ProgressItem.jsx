import React from "react";

const ProgressItem = ({
  progressItemTitle,
  progressItemSubTitle,
  progressItemIcon,
}) => {
  return (
    <div className="progress-item">
      <span>{progressItemIcon()}</span>
      <div className="progress-item-text-container">
        <p className="font-large weight-semi-bold primary-text-color">
          {progressItemTitle}
        </p>
        <p className="font-extra-small weight-semi-bold primary-text-color">
          {progressItemSubTitle}
        </p>
      </div>
    </div>
  );
};

export default ProgressItem;
