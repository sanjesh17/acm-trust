import React from "react";
import "./PaymentPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useTitle from "../../hooks/useTitle";
import Payment from "../../components/payment/Payment";

const PaymentPage = ({ paymentType }) => {
  useTitle("Payment | VDWT");
  return (
    <div className="bg-container">
      <Navbar />
      <div className="payment-container">
        <Payment donateType={paymentType === "hidden" ? "hidden" : undefined} />
      </div>
      <Footer />
    </div>
  );
};

export default PaymentPage;
