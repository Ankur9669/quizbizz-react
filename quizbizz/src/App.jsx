import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/authentication/login/Login";
import SignUp from "./pages/authentication/signUp/SignUp";
import Toasts from "./util/toasts/Toasts";
import MockMan from "mockman-js";

function App() {
  return (
    <div className="App">
      <Toasts />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mock" element={<MockMan />} />
      </Routes>
    </div>
  );
}

export default App;
