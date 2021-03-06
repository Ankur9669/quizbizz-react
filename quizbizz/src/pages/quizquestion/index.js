import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useQuiz } from "../../context/quiz-context";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../context/toast-context";
import { AiOutlineLeft, AiOutlineRight } from "../../assets/icons/icons";
import { useDocumentTitle } from "../../util/change-document-title";

export {
  Navbar,
  Sidebar,
  useQuiz,
  useNavigate,
  useToast,
  AiOutlineLeft,
  AiOutlineRight,
  useDocumentTitle,
};
