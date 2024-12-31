import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./templebooking.css";
import withFadeInAnimation from "../../hooks/withFadeInAnimation";
import "../../hooks/fadeinanimation.css";
import FullScreenLoader from "../fullscreenloader/FullScreenLoader";
import axios from "axios";
import emailjs from "emailjs-com";

const TempleBooking = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [booking, setBooking] = useState({
    temple: "",
    date: "",
    time: "",
    name: "",
    email: "",
    mobile: "",
    gotram: "",
    rasi: "",
    nakshatra: "",
    fname: "",
    purpose: "",
  });

  const temples = [
    {
      id: 1,
      name: "Shri Ishta Siddhi Vinayakar Temple",
      image: "vinayakar.jpg",
    },
    { id: 2, name: "Arulmigu Selliamman Temple", image: "selliamman.jpg" },
    { id: 3, name: "Arulmigu Mariamman Temple", image: "mariamman.jpg" },
    {
      id: 4,
      name: "Sri Draupada Sameda Dharmaraja Swamy Temple",
      image: "dharmaraja.jpg",
    },
  ];

  const rasis = [
    "மேஷம் (Aries)",
    "ரிஷபம் (Taurus)",
    "மிதுனம் (Gemini)",
    "கடகம் (Cancer)",
    "சிம்மம் (Leo)",
    "கன்னி (Virgo)",
    "துலாம் (Libra)",
    "விருச்சிகம் (Scorpio)",
    "தனுசு (Sagittarius)",
    "மகரம் (Capricorn)",
    "கும்பம் (Aquarius)",
    "மீனம் (Pisces)",
  ];

  const purposes = ["Birthday (பிறந்தநாள்)", "Marriage (திருமணம்)"];

  const nakshatras = [
    "அஸ்வினி",
    "பரணி",
    "கார்த்திகை",
    "ரோகிணி",
    "மிருகசீரிஷம்",
    "திருவாதிரை",
    "புனர்பூசம்",
    "பூசம்",
    "ஆயில்யம்",
    "மகம்",
    "பூரம்",
    "உத்திரம்",
    "அஸ்தம்",
    "சித்திரை",
    "சுவாதி",
    "விசாகம்",
    "அனுஷம்",
    "கேட்டை",
    "மூலம்",
    "பூராடம்",
    "உத்திராடம்",
    "திருவோணம்",
    "அவிட்டம்",
    "சதயம்",
    "பூரட்டாதி",
    "உத்திரட்டாதி",
    "ரேவதி",
  ];

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const dynamicFormData = {
      recipient_name: booking.name,
      company_name: "Kaliyampoondi Village Development Trust",
      email_body: `Thank you, ${booking.name}, for booking a visit to ${booking.temple} on ${booking.date} at ${booking.time}. Keep supporting the Kaliyampoondi Village Development Trust.`,
      action_text: "Donate",
      action_url: "https://acm-trust.vercel.app/donate",
      contact_email: "kpdvillagedevelopmenttrust@gmail.com",
      current_year: new Date().getFullYear(),
      to_email: booking.email,
    };

    axios
      .post("https://acmback.onrender.com/tickets/add", booking)
      .then((response) => {
        alert(
          "Ticket Has Been Booked Successfully and Confirmation Email and SMS has been sent!"
        );
        console.log(response.data);
        emailjs
          .send(
            "service_zcs0bg2",
            "template_x5yzam3",
            dynamicFormData,
            "7svxwXsjGc9yCmrAd"
          )
          .then(
            (response) => {
              console.log(
                "Email sent successfully!",
                response.status,
                response.text
              );
              setStatus("Email sent successfully!");
              navigate(0);
            },
            (error) => {
              console.error("Failed to send email:", error);
              setStatus("Failed to send email. Please try again.");
              alert("Email not sent!");
            }
          );
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="kaliyampoondi-temple-booking-container">
      {loading && <FullScreenLoader />}
      <div className="kaliyampoondi-booking-header">
        <h1>Kaliyampoondi Village Temples Archana Booking</h1>
        <svg
          width="462"
          height="35"
          viewBox="0 0 462 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 20C260.2 -5.6 415.667 4.66667 461 13M55 32C314.2 6.4 388.667 4.66667 434 13"
            stroke="#FFDE91"
            strokeWidth="6"
          />
        </svg>
        <div className="kaliyampoondi-booking-progress">
          <div
            className={`kaliyampoondi-progress-step ${
              step >= 1 ? "active" : ""
            }`}
          >
            1. Temple Selection
          </div>
          <div
            className={`kaliyampoondi-progress-step ${
              step >= 2 ? "active" : ""
            }`}
          >
            2. Date & Time
          </div>
          <div
            className={`kaliyampoondi-progress-step ${
              step >= 3 ? "active" : ""
            }`}
          >
            3. Details
          </div>
          <div
            className={`kaliyampoondi-progress-step ${
              step >= 4 ? "active" : ""
            }`}
          >
            4. Confirm
          </div>
        </div>
      </div>

      <div className="kaliyampoondi-booking-content">
        {step === 1 && (
          <div className="kaliyampoondi-booking-step">
            <h2>Select Temple</h2>
            <div className="kaliyampoondi-temple-grid">
              {temples.map((temple) => (
                <div
                  key={temple.id}
                  className={`kaliyampoondi-temple-card ${
                    booking.temple === temple.name ? "selected" : ""
                  }`}
                  onClick={() =>
                    setBooking({ ...booking, temple: temple.name })
                  }
                >
                  <img src={temple.image} alt={temple.name} />
                  <p>{temple.name}</p>
                </div>
              ))}
            </div>
            <button
              className="kaliyampoondi-booking-button"
              onClick={nextStep}
              disabled={!booking.temple}
            >
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="kaliyampoondi-booking-step">
            <h2>Select Date and Time</h2>
            <div className="kaliyampoondi-date-time-picker">
              <div className="kaliyampoondi-input-wrapper">
                <label className="kaliyampoondi-booking-label" htmlFor="date">
                  Date
                </label>
                <input
                  className="kaliyampoondi-booking-input"
                  type="date"
                  id="date"
                  name="date"
                  value={booking.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="kaliyampoondi-input-wrapper">
                <label className="kaliyampoondi-booking-label" htmlFor="time">
                  Time
                </label>
                <select
                  className="kaliyampoondi-booking-input"
                  id="time"
                  name="time"
                  value={booking.time}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select time
                  </option>
                  <option value="08:00">08:00 AM - 09:00 AM</option>
                  <option value="18:00">06:30 PM - 07:30 PM</option>
                </select>
              </div>
            </div>
            <div className="kaliyampoondi-button-group">
              <button
                className="kaliyampoondi-booking-button"
                onClick={prevStep}
              >
                Back
              </button>
              <button
                className="kaliyampoondi-booking-button"
                onClick={nextStep}
                disabled={!booking.date || !booking.time}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="kaliyampoondi-booking-step">
            <h2>Enter Your Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="kaliyampoondi-input-wrapper">
                <label className="kaliyampoondi-booking-label" htmlFor="name">
                  Full Name
                </label>
                <input
                  className="kaliyampoondi-booking-input"
                  type="text"
                  id="name"
                  name="name"
                  value={booking.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="kaliyampoondi-input-wrapper">
                <label className="kaliyampoondi-booking-label" htmlFor="fname">
                  Father / Husband's Name
                </label>
                <input
                  className="kaliyampoondi-booking-input"
                  type="text"
                  id="fname"
                  name="fname"
                  value={booking.fname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="kaliyampoondi-select-wrapper">
                <label
                  className="kaliyampoondi-booking-label"
                  htmlFor="purpose"
                >
                  Purpose
                </label>
                <select
                  className="kaliyampoondi-booking-select"
                  id="purpose"
                  name="purpose"
                  value={booking.purpose}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Purpose</option>
                  {purposes.map((purpose, index) => (
                    <option key={index} value={purpose}>
                      {purpose}
                    </option>
                  ))}
                </select>
              </div>
              <div className="kaliyampoondi-input-wrapper">
                <label className="kaliyampoondi-booking-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="kaliyampoondi-booking-input"
                  type="email"
                  id="email"
                  name="email"
                  value={booking.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="kaliyampoondi-input-wrapper">
                <label className="kaliyampoondi-booking-label" htmlFor="mobile">
                  Mobile Number
                </label>
                <input
                  className="kaliyampoondi-booking-input"
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={booking.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="kaliyampoondi-input-wrapper">
                <label className="kaliyampoondi-booking-label" htmlFor="gotram">
                  Gotram
                </label>
                <input
                  className="kaliyampoondi-booking-input"
                  type="text"
                  id="gotram"
                  name="gotram"
                  value={booking.gotram}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="kaliyampoondi-select-wrapper">
                <label className="kaliyampoondi-booking-label" htmlFor="rasi">
                  Rasi (ராசி)
                </label>
                <select
                  className="kaliyampoondi-booking-select"
                  id="rasi"
                  name="rasi"
                  value={booking.rasi}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Rasi</option>
                  {rasis.map((rasi, index) => (
                    <option key={index} value={rasi}>
                      {rasi}
                    </option>
                  ))}
                </select>
              </div>
              <div className="kaliyampoondi-select-wrapper">
                <label
                  className="kaliyampoondi-booking-label"
                  htmlFor="nakshatra"
                >
                  Nakshatra (நட்சத்திரம்)
                </label>
                <select
                  className="kaliyampoondi-booking-select"
                  id="nakshatra"
                  name="nakshatra"
                  value={booking.nakshatra}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Nakshatra</option>
                  {nakshatras.map((nakshatra, index) => (
                    <option key={index} value={nakshatra}>
                      {nakshatra}
                    </option>
                  ))}
                </select>
              </div>
              <div className="kaliyampoondi-button-group">
                <button
                  className="kaliyampoondi-booking-button"
                  type="button"
                  onClick={prevStep}
                >
                  Back
                </button>
                <button
                  className="kaliyampoondi-booking-button"
                  type="button"
                  onClick={nextStep}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 4 && (
          <div className="kaliyampoondi-booking-step">
            <h2 onClick={handleSubmit}>Confirm Booking</h2>
            <div className="kaliyampoondi-booking-summary">
              <div className="kaliyampoondi-details-book">
                <p>
                  <strong>Temple:</strong> {booking.temple}
                </p>
                <p>
                  <strong>Date:</strong> {booking.date}
                </p>
                <p>
                  <strong>Time:</strong> {booking.time}
                </p>
                <p>
                  <strong>Name:</strong> {booking.name}
                </p>
                <p>
                  <strong>Email:</strong> {booking.email}
                </p>
                <p>
                  <strong>Mobile:</strong> {booking.mobile}
                </p>
                <p>
                  <strong>Gotram:</strong> {booking.gotram}
                </p>
                <p>
                  <strong>Rasi:</strong> {booking.rasi}
                </p>
                <p>
                  <strong>Nakshatra:</strong> {booking.nakshatra}
                </p>
              </div>
              <div className="kaliyampoondi-details-summary-card">
                <div className="kaliyampoondi-ticket-card">
                  <div className="kaliyampoondi-ticket-header">
                    <h3>Booking Confirmation</h3>
                  </div>
                  <div className="kaliyampoondi-ticket-body">
                    <p className="kaliyampoondi-ticket-detail">
                      <strong>Name:</strong> {booking.name}
                    </p>
                    <p className="kaliyampoondi-ticket-detail">
                      <strong>Temple:</strong> {booking.temple}
                    </p>
                    <p className="kaliyampoondi-ticket-detail">
                      <strong>Date:</strong> {booking.date}
                    </p>
                    <p className="kaliyampoondi-ticket-detail">
                      <strong>Time:</strong> {booking.time}
                    </p>
                    <p className="kaliyampoondi-ticket-detail">
                      <strong>Purpose:</strong> {booking.purpose}
                    </p>
                    <p className="kaliyampoondi-booking-fee">
                      Booking Fee: <span>₹1000</span>
                    </p>
                  </div>
                  <div className="kaliyampoondi-ticket-footer">
                    This is only a preview ticket!
                  </div>
                  <div className="kaliyampoondi-ticket-decoration"></div>
                </div>
              </div>
            </div>
            <div className="kaliyampoondi-button-group">
              <button
                className="kaliyampoondi-booking-button"
                onClick={prevStep}
              >
                Back
              </button>
              <button
                className="kaliyampoondi-booking-button"
                onClick={handleSubmit}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="kaliyampoondi-booking-footer">
        <div className="kaliyampoondi-contact-info">
          <h3>Contact Details</h3>
          <p>PRASANTH.N: 9159757660</p>
          <p>NARENTHIRAN.R: 9677772808</p>
        </div>
      </div>
    </div>
  );
};

export default withFadeInAnimation(TempleBooking);
