import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="bg-container">
      <div className="navbar-container">
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
    </div>
  );
};

export default Navbar;
