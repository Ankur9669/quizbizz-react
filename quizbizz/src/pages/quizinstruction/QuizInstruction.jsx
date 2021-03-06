import React, { useEffect, useState } from "react";
import CssImage from "../../assets/images/css.png";
import "./quizinstruction.css";
import { Sidebar, Navbar, fetchApi, useToast, useDocumentTitle } from "./index";
import { useQuiz } from "../../context/quiz-context";
import { useParams, Link } from "react-router-dom";

const QuizInstruction = () => {
  const today = new Date();
  const todaysDate =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  const { showToast } = useToast();
  const [quizDetails, setQuizDetails] = useState({
    quizImage: "",
    quizName: "Loading...",
  });
  const { setQuiz } = useQuiz();
  const { quizId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    useDocumentTitle("QuizBizz-Instructions");
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    const { data, success, statusCode, message } = await fetchApi(
      `/api/quiz/${quizId}`,
      {},
      false
    );
    if (success && statusCode === 200) {
      const quizImage = data.quiz.quizImage;
      const quizName = data.quiz.quizName;
      setQuizDetails({ quizImage: quizImage, quizName: quizName });
      setQuiz(data.quiz);
    } else {
      showToast("Something Went Wrong", "ERROR");
    }
  };
  return (
    <div>
      <Navbar />
      <main className="page-container">
        <Sidebar />
        <div className="col-2 hero-section-container">
          <div className="quiz-heading-container">
            <div className="wrapper">
              <h1 className="h4">{quizDetails.quizName} Quiz</h1>
              <p className="font-medium primary-text-color">
                Read the following instructions carefully
              </p>
            </div>
            <div className="image-container">
              <img
                src="/images/css.png"
                className="img-responsive quiz-info-image"
                alt="quiz-name"
              />
            </div>
          </div>

          {/* <!--  ******************************** Quiz Image and details container Start ********************************  --> */}
          <div className="quiz-info-container">
            <div className="image-container">
              <img
                src={quizDetails.quizImage}
                className="img-responsive quiz-info-image"
                alt="quiz-name"
              />
            </div>
            <div className="quiz-info">
              <div className="spacer-1"></div>
              <div className="quiz-info-item">
                <span className="font-medium-large weight-bold flex-1 margin-horizontal-lg">
                  Date:
                </span>
                <span className="font-medium-large weight-normal flex-1 margin-horizontal-lg">
                  {todaysDate}
                </span>
              </div>
              <div className="spacer-1"></div>
              <div className="quiz-info-item">
                <span className="font-medium-large weight-bold flex-1 margin-horizontal-lg">
                  Time Limit:
                </span>
                <span className="font-medium-large weight-normal flex-1 margin-horizontal-lg">
                  30 min
                </span>
              </div>
              <div className="spacer-1"></div>
              <div className="quiz-info-item">
                <span className="font-medium-large weight-bold flex-1 margin-horizontal-lg">
                  Attempts:
                </span>
                <span className="font-medium-large weight-normal flex-1 margin-horizontal-lg">
                  3
                </span>
              </div>
              <div className="spacer-1"></div>
              <div className="quiz-info-item">
                <span className="font-medium-large weight-bold flex-1 margin-horizontal-lg">
                  Points:
                </span>
                <span className="font-medium-large weight-normal flex-1 margin-horizontal-lg">
                  200
                </span>
              </div>
              <div className="spacer-1"></div>
            </div>
          </div>
          {/* <!--  ******************************** Quiz Image and details container End ********************************  --> */}

          {/* <!--  ******************************** Quiz Instructions Container Start ********************************  --> */}
          <div className="quiz-instructions-container">
            <h2 className="primary-text-color font-medium-large weight-bold">
              Instructions
            </h2>
            <div className="spacer-2"></div>
            <p className="primary-text-color font-medium-large weight-normal">
              This quiz consists of 5 multiple-choice questions. To be
              successfull with the quizes, it is important to be conversant with
              all the topics.
            </p>
            <div className="spacer-2"></div>
            <p className="primary-text-color font-medium-large weight-normal">
              This quiz consists of 5 multiple-choice questions. To be
              successfull with the quizes, it is important to be conversant with
              all the topics.
            </p>
            <div className="spacer-2"></div>
            <p className="primary-text-color font-medium-large weight-normal">
              To start click "Start" button. When finished click submit button.
            </p>
          </div>
          {/* <!--  ******************************** Quiz Instructions Container End ********************************  --> */}

          <div className="quiz-btn-container">
            <Link
              to="/quizquestion"
              className="button button-primary quiz-button"
            >
              Start
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuizInstruction;
