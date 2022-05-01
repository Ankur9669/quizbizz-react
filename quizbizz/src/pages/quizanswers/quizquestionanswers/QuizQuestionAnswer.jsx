import React from "react";

const QuizQuestionAnswer = ({ question, correctAnswer, answerSelected }) => {
  const options = question?.options;
  return (
    <div className="quiz-question-answer-container">
      <h2 className="primary-text-color font-medium-large weight-bold">
        {`${question?.questionNumber}. ${question?.question}`}
      </h2>
      <div className="spacer-2"></div>
      <ol className="quiz-questions-container list-style-upper-alphabets">
        <li className="font-medium-large primary-text-color">{options?.[0]}</li>
        <div className="spacer-1"></div>
        <li className="font-medium-large primary-text-color">{options?.[1]}</li>
        <div className="spacer-1"></div>
        <li className="font-medium-large primary-text-color">{options?.[2]}</li>
        <div className="spacer-1"></div>
        <li className="font-medium-large primary-text-color">{options?.[3]}</li>
      </ol>
      <div className="spacer-2"></div>
      <p className="font-medium weight-semi-bold primary-text-color correct-answer">
        Correct Answer: {options?.[correctAnswer?.charCodeAt(0) - 97]}
      </p>
      <div className="spacer-1"></div>
      <p
        className={`font-medium weight-semi-bold primary-text-color ${
          answerSelected === correctAnswer ? "correct-answer" : "wrong-answer"
        } `}
      >
        Your Answer: {options?.[answerSelected?.charCodeAt(0) - 97]}
      </p>
    </div>
  );
};

export default QuizQuestionAnswer;
