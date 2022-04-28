import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useQuiz } from "../../context/quiz-context";
import { useNavigate } from "react-router-dom";
import "./quizquestion.css";

const QuizQuestion = () => {
  const { quiz, setQuiz, answersSelected, setAnswersSelected } = useQuiz();
  const navigate = useNavigate();

  //   if (quiz === null) {
  //     navigate("/");
  //     return null;
  //   }

  const quizName = quiz?.quizName;
  const quizImage = quiz?.quizImage;
  const [questionToShow, setQuestionToShow] = useState(0);
  const [optionSelected, setOptionSelected] = useState("");
  const questions = quiz?.questions;
  const question = questions?.[questionToShow];
  const options = question?.options;

  // console.log(options);

  const handleNextButtonClick = () => {
    if (questionToShow + 1 >= questions.length) {
      return;
    }
    setQuestionToShow((prev) => prev + 1);
    setOptionSelected("");
  };

  const handlePrevButtonClick = () => {
    if (questionToShow - 1 < 0) {
      return;
    }
    setQuestionToShow((prev) => prev - 1);
    setOptionSelected("");
  };

  const handleInputChange = (index) => {
    let tempAnswers = answersSelected;
    tempAnswers[questionToShow] = String.fromCharCode(index + 97);
    setAnswersSelected([...tempAnswers]);
  };

  // useEffect(() => {
  //   console.log(answersSelected);
  // }, [answersSelected]);

  return (
    <div>
      <Navbar />
      <main className="page-container">
        <Sidebar />
        <div className="col-2 hero-section-container">
          {/* <!--  ******************************** Hero Section Start ********************************  --> */}
          <div className="quiz-heading-container">
            <div className="wrapper">
              <h1 className="h4">{quizName} Quiz</h1>
              <p className="font-medium primary-text-color">
                Read the following instructions carefully
              </p>
            </div>

            {/* <p className="timer-container font-medium-large weight-bold">
              Timer: 20:00 min
            </p> */}
          </div>

          {/* <!--  ******************************** Quiz Image and question container Start ********************************  --> */}
          <div className="quiz-info-container quiz-question-container">
            <div className="image-container">
              <img
                src={quizImage}
                className="img-responsive quiz-info-image"
                alt={quizName}
              />
            </div>
            <div className="quiz-question">
              <h2 className="font-medium-large weight-semi-bold primary-color">
                Question {question.questionNumber} / {questions.length}:
              </h2>
              <div className="spacer-1"></div>
              <p
                className="font-medium-large weight-semi-bold primary-text-color"
                aria-label="question"
              >
                {question?.question}
              </p>
            </div>
          </div>
          {/* <!--  ******************************** Quiz Image and question container End ********************************  --> */}

          {/* <!--  ******************************** Quiz Options Container Start ********************************  --> */}
          <div className="quiz-options-container">
            <h2 className="primary-text-color font-medium-large weight-bold">
              Choose answer
            </h2>
            <div className="spacer-2"></div>

            <ul className="list-style-none" aria-label="options">
              {options.map((item, index) => (
                <div>
                  <li className="quiz-option">
                    <input
                      type="radio"
                      name="option"
                      id={index}
                      onChange={() => {
                        handleInputChange(index);
                      }}
                      checked={
                        String.fromCharCode(index + 97) ===
                        answersSelected[questionToShow]
                      }
                      required
                    />
                    <label
                      htmlFor={index}
                      className="margin-horizontal-lg font-medium-large weight-semi-bold"
                    >
                      {item}
                    </label>
                  </li>
                  <div className="spacer-1"></div>
                </div>
              ))}
            </ul>
          </div>
          {/* <!--  ******************************** Quiz Options Container End ********************************  --> */}

          {/* <!--  ******************************** Quiz Button Container Start ********************************  --> */}
          <div className="quiz-btn-container">
            <button
              onClick={handlePrevButtonClick}
              className="button button-primary quiz-button prev-button"
              aria-label="previous-button"
            >
              <i className="fa fa-angle-left" aria-hidden="true"></i>
              Prev Question
            </button>
            {question.questionNumber < questions.length ? (
              <button
                onClick={handleNextButtonClick}
                className="button button-primary quiz-button next-button"
                aria-label="next-button"
              >
                Next Question
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </button>
            ) : (
              <button
                onClick={handleNextButtonClick}
                className="button button-primary quiz-button next-button"
                aria-label="next-button"
              >
                Submit
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </button>
            )}
          </div>
          {/* <!--  ******************************** Quiz Button Container End ********************************  --> */}
        </div>
      </main>
    </div>
  );
};

export default QuizQuestion;
