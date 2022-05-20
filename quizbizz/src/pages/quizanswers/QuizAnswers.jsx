import React, { useEffect } from "react";
import "./quizanswers.css";
import {
  Navbar,
  Sidebar,
  QuizQuestionAnswer,
  useQuiz,
  Link,
  useDocumentTitle,
} from "./index";

const QuizAnswers = () => {
  const { quiz, answersSelected } = useQuiz();
  const questions = quiz?.questions;
  const correctAnswers = quiz?.answers;
  let totalCorrectAnswers = 0;

  useEffect(() => {
    useDocumentTitle("QuizBizz-Answer");
    window.scrollTo(0, 0);
  }, []);

  const findTotalCorrectAnswers = () => {
    for (let index = 0; index < questions.length; index++) {
      let question = questions[index];
      let options = question?.options;

      if (
        options[index] === options[correctAnswers[index].charCodeAt(0) - 97]
      ) {
        totalCorrectAnswers++;
      }
    }
  };
  findTotalCorrectAnswers();

  return (
    <div>
      <Navbar />
      <main className="page-container">
        <Sidebar />

        <div className="col-2 hero-section-container">
          <div className="quiz-heading-container">
            <div className="wrapper">
              <h1 className="h4">
                Your {totalCorrectAnswers} out of 5 questions were correct!!!
              </h1>
            </div>
          </div>

          {questions.map((question) => {
            return (
              <div key={question.questionNumber}>
                <QuizQuestionAnswer
                  question={question}
                  answerSelected={
                    answersSelected[parseInt(question.questionNumber - 1)]
                  }
                  correctAnswer={
                    correctAnswers[parseInt(question.questionNumber - 1)]
                  }
                />
                <div className="spacer-2"></div>
              </div>
            );
          })}

          <div className="quiz-btn-container">
            <Link
              to="/"
              className="button button-primary quiz-button prev-button"
            >
              Retake Quiz
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuizAnswers;
