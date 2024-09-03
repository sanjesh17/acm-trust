import React from "react";
import "./BookingPage.css";
import Navbar from "../../components/navbar/Navbar";
import TempleBooking from "../../components/booking/TempleBooking";
import Footer from "../../components/footer/Footer";
import useTitle from "../../hooks/useTitle";

const BookingPage = () => {
  useTitle("Booking | VDWT");

  return (
    <div className="bg-container">
      <Navbar />
      <TempleBooking />
      <Footer />
    </div>
  );
};

export default BookingPage;
