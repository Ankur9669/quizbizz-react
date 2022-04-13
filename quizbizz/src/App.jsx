import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/authentication/login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
