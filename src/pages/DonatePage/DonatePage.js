import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useTitle from "../../hooks/useTitle";
import DonateCard from "../../components/donate/DonateCard";
import { Link } from "react-router-dom";
import "./DonatePage.css";

const DonatePage = () => {
  useTitle("Donate | VDWT");

  return (
    <div className="bg-container">
      <Navbar />
      <div className="donation-container">
        <Link to="/payment" style={{ textDecoration: "none" }}>
          <DonateCard type={"Donate"} />
        </Link>
        <Link to="/payment/anonymous" style={{ textDecoration: "none" }}>
          <DonateCard type={"Donate Anonymously"} />
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default DonatePage;
