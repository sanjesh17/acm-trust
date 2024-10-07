import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import QuoteCard from "../../components/quotes/QuoteCard";
import About from "../../components/about/About";
import Motto from "../../components/motto/Motto";
import GalleryCarousel from "../../components/gallery/GalleryCarousel";
import Footer from "../../components/footer/Footer";
import useTitle from "../../hooks/useTitle";
import MultiCarousel from "../../components/events/Events";
import { useState, useCallback, useEffect } from "react";

const HomePage = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const checkAdminStatus = useCallback(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  useEffect(() => {
    checkAdminStatus();

    window.addEventListener("userLoginStatusChanged", checkAdminStatus);

    return () => {
      window.removeEventListener("userLoginStatusChanged", checkAdminStatus);
    };
  }, [checkAdminStatus]);
  useTitle("Home | VDWT");

  return (
    <div className="bg-container">
      <Navbar />
      <Hero />
      <QuoteCard />
      <MultiCarousel isAdmin={isAdmin} />
      <About />
      <Motto />
      <GalleryCarousel />
      <Footer />
    </div>
  );
};

export default HomePage;
