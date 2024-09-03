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

  const isAuthenticated = !!localStorage.getItem("token");

  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <Link to="/home" style={{ color: "inherit", textDecoration: "none" }}>
          <h3>Logo</h3>
        </Link>
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
        <Link to="/survey" style={{ color: "inherit", textDecoration: "none" }}>
          <p>Survey</p>
        </Link>
        <Link
          to="/booking"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <p>Booking</p>
        </Link>
        <div className="nav-btn mobile">
          <button type="button">Donate</button>
          {isAuthenticated && (
            <div className="donlog-mobile-container">
              <div
                className="logout-icon"
                title="Logout"
                onClick={handleLogOut}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                >
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="nav-btn desktop">
        <button type="button">Donate</button>
        {isAuthenticated && (
          <div className="logout-icon" title="Logout" onClick={handleLogOut}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="24px"
              height="24px"
              fill="currentColor"
            >
              <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
            </svg>
          </div>
        )}
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`hamburger ${menuOpen ? "open" : ""}`}></div>
      </div>
    </div>
  );
};

export default Navbar;
