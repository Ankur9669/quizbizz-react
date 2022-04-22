import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [quiz, setQuiz] = useState(null);
  let answersArray = Array(quiz?.questions?.length).fill("");
  const [answersSelected, setAnswersSelected] = useState(answersArray);
  return (
    <QuizContext.Provider
      value={{ quiz, setQuiz, answersSelected, setAnswersSelected }}
    >
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { useQuiz, QuizProvider };
