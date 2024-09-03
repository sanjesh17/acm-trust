import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Survey from "../../components/survey/Survey";
import useTitle from "../../hooks/useTitle";

const SurveyPage = () => {
  useTitle("Survey | VDWT");

  return (
    <div className="bg-container">
      <Navbar />
      <Survey />
      <Footer />
    </div>
  );
};

export default SurveyPage;
