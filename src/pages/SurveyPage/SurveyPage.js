import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Report from "../../components/report/Report";
import useTitle from "../../hooks/useTitle";

const SurveyPage = () => {
  useTitle("Survey | VDWT");

  return (
    <div className="bg-container">
      <Navbar />
      <Report />
      <Footer />
    </div>
  );
};

export default SurveyPage;
