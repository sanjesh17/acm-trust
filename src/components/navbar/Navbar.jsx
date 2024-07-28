import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <h3>Logo</h3>
      </div>
      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <Link to="/home" style={{ color: "inherit", textDecoration: "none" }}>
          <p>Home</p>
        </Link>
        <Link
          to="/contact"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <p>Contact Us</p>
        </Link>
        <p>Survey</p>
        <Link
          to="/booking"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <p>Booking</p>
        </Link>
        <div className="nav-btn mobile">
          <button type="button">Donate</button>
        </div>
      </div>
      <div className="nav-btn desktop">
        <button type="button">Donate</button>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`hamburger ${menuOpen ? "open" : ""}`}></div>
      </div>
    </div>
  );
};

export default Navbar;
