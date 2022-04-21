import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastProvider } from "./context/toast-context";
import { UserProvider } from "./context/user-context";
import { QuizProvider } from "./context/quiz-context";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <QuizProvider>
        <UserProvider>
          <ToastProvider>
            <App />
          </ToastProvider>
        </UserProvider>
      </QuizProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
