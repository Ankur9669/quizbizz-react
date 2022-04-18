import React from "react";
import { useUser } from "../../context/user-context";
import { Navigate } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const { user } = useUser();
  return user.isUserLoggedIn ? children : <Navigate to="/login" />;
};

export default RequiredAuth;
