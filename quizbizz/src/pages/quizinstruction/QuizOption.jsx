import React from "react";

export const QuizOption = () => {
  return (
    <div>
      <li>
        <input type="radio" name="option" id="option-1" required />
        <label
          htmlFor="option-1"
          className="margin-horizontal-lg font-medium-large weight-semi-bold"
        >
          Cascading Style Sheets
        </label>
      </li>
      <div className="spacer-1"></div>
    </div>
  );
};
