import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

const Card = ({ event }) => {
  const navigate = useNavigate();

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

  const handleDelete = async (eventId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this event?");
    
    if (isConfirmed) {
      try {
        const response = await fetch(`https://acmback.onrender.com/events/${eventId}`, {
          method: 'DELETE',
        });
        
        if (!response.ok) {
          throw new Error('Failed to delete event');
        }
        
        navigate(0);
      } catch (err) {
        console.error("Error deleting event:", err);
        alert("Failed to delete event. Please try again.");
      }
    }
};
  return (
    <div className="card-wrapper">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={event.image} alt="Event" />
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
            {isAdmin && (
              <button onClick={() => handleDelete(event._id)} className="delete-btn">
                Delete
              </button> 
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
