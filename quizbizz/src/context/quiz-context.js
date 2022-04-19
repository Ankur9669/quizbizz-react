import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [quiz, setQuiz] = useState(null);
  return (
    <QuizContext.Provider value={{ quiz, setQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { useQuiz, QuizProvider };
