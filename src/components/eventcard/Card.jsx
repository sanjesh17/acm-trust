import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="card-wrapper">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src="/api/placeholder/320/400" alt="Event" />
          </div>
          <div className="flip-card-back">
            <h2>Kaaliamman Kovil Thiruvizha</h2>
            <p>
              <strong>Date:</strong> September 15, 2024
            </p>
            <p>
              <strong>Time:</strong> 7:00 PM - 10:00 PM
            </p>
            <p>
              <strong>Location:</strong> Kaliamman Temple, Kaliyampoondi
            </p>
            <p>
              <strong>Description:</strong> Join us for the grand festival of
              the year
            </p>
            <button className="register-button">Register Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
