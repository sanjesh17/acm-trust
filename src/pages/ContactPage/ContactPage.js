import React from "react";
import "./contactpage.css";
import Navbar from "../../components/navbar/Navbar";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

const ContactPage = () => {
  return (
    <div className="bg-container">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
