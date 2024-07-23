import React, { useState, useEffect } from "react";
import "./navbar.css";

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
        <p>Home</p>
        <p>About Us</p>
        <p>Get Involved</p>
        <p>Contact Us</p>
      </div>
      <div className="nav-btn">
        <button type="button">Donate</button>
      </div>
    </div>
  );
};

export default Navbar;
