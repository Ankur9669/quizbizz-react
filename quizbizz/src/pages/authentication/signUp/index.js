import {
  AiOutlineMail,
  AiFillEyeInvisible,
  AiFillEye,
} from "../../../assets/icons/icons";
import SignupForm from "./SignupForm";
import AuthenticationBackground from "../AuthenticationBackground";
import SignUpImage from "../../../assets/images/quizbizz-signup.svg";
import { useDocumentTitle } from "../../../util/change-document-title";
import Navbar from "../../../components/navbar/Navbar";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { postApi } from "../../../util/api/postApi";
import { useUser } from "../../../context/user-context";
import { useToast } from "../../../context/toast-context";

export {
  AiOutlineMail,
  AiFillEyeInvisible,
  AiFillEye,
  PrimaryButton,
  SecondaryButton,
  Link,
  Axios,
  SignupForm,
  SignUpImage,
  AuthenticationBackground,
  useDocumentTitle,
  Navbar,
  postApi,
  useToast,
  useUser,
  useNavigate,
};
