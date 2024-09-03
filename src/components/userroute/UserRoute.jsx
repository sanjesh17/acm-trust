import React from "react";
import { Navigate } from "react-router-dom";

const UserRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ? <Navigate to="/home" /> : children;
};

export default UserRoute;
