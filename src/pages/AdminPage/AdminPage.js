import React from "react";
import "./AdminPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useTitle from "../../hooks/useTitle";
import AdminLogin from "../../components/adminlogin/AdminLogin";

const AdminPage = () => {
  useTitle("Admin | VDWT");

  return (
    <div className="bg-container">
      <Navbar />
      <AdminLogin />
      <Footer />
    </div>
  );
};

export default AdminPage;
