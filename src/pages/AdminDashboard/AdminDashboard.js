import React from "react";
import Dashboard from "../../components/adminDashboard/Dashboard";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const AdminDashboard = () => {
  return (
    <div className="bg-container">
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default AdminDashboard;
