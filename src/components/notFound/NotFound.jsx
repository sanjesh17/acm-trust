import React from "react";
import { Section404 } from "@404pagez/react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="error-page">
      <Section404 size={40} />
      <Link to="/home">
        <button className="not-found-button">Go Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
