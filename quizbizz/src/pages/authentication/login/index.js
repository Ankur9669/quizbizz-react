import Navbar from "../../../components/navbar/Navbar";
import { useDocumentTitle } from "../../../util/change-document-title";
import AuthenticationBackground from "../AuthenticationBackground";
import Loginform from "./Loginform";
import LoginImage from "../../../assets/images/quizbizz-login.svg";
import {
  AiOutlineMail,
  AiFillEyeInvisible,
  AiFillEye,
} from "../../../assets/icons/icons";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../../context/user-context";
import { useToast } from "../../../context/toast-context";
import { postApi } from "../../../util/api/postApi";
import { Location, useLocation } from "react-router-dom";

export {
  Navbar,
  useDocumentTitle,
  AuthenticationBackground,
  LoginImage,
  Loginform,
  AiOutlineMail,
  AiFillEyeInvisible,
  AiFillEye,
  PrimaryButton,
  SecondaryButton,
  Link,
  useNavigate,
  useUser,
  useToast,
  postApi,
  useLocation,
};
