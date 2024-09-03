import React from "react";
import "./AuthPage.css";
import Login from "../../components/auth/Login";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useTitle from "../../hooks/useTitle";

const AuthPage = () => {
  useTitle("Auth | VDWT");
  
  return (
    <div className="bg-container">
      <Navbar />
      <Login />
      <Footer />
    </div>
  );
};

export default AuthPage;
