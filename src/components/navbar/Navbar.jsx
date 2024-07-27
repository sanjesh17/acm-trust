import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <h3>Logo</h3>
      </div>
      <div className="navbar-links">
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
        <p>Booking</p>
      </div>
      <div className="nav-btn">
        <button type="button">Donate</button>
      </div>
    </div>
  );
};

export default Navbar;
