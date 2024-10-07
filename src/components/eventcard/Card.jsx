import React from "react";
import "./card.css";

const Card = ({ event }) => {
  return (
    <div className="card-wrapper">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src="/api/placeholder/320/400" alt="Event" />
          </div>
          <div className="flip-card-back">
            <h2>{event.eventName}</h2>
            <p>
              <strong>Date:</strong> {event.eventDate}
            </p>
            <p>
              <strong>Time:</strong> {event.eventTime}
            </p>
            <p>
              <strong>Location:</strong> {event.eventLocation}
            </p>
            <p>
              <strong>Description:</strong> {event.eventDescription}
            </p>
            <button className="register-button">Register Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
