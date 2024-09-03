import React from "react";
import "./RegisterPage.css";
import SignUp from "../../components/register/SignUp";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useTitle from "../../hooks/useTitle";

const RegisterPage = () => {
  useTitle("Register | VDWT");

  return (
    <div className="bg-container">
      <Navbar />
      <SignUp />
      <Footer />
    </div>
  );
};

export default RegisterPage;
