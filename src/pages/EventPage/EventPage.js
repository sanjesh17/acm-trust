import React from "react";
import AddEventForm from "../../components/addEventForm/AddEventForm";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useTitle from "../../hooks/useTitle";

const EventPage = () => {
  useTitle("Event | VDWT");

  return (
    <div className="bg-container">
      <Navbar />
      <AddEventForm />
      <Footer />
    </div>
  );
};

export default EventPage;
