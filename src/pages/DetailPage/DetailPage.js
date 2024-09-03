import React from "react";
import "./DetailPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Details from "../../components/details/Details";
import useTitle from "../../hooks/useTitle";

const DetailPage = () => {
  useTitle("Details | VDWT");
  
  return (
    <div className="bg-container">
      <Navbar />
      <Details />
      <Footer />
    </div>
  );
};

export default DetailPage;
