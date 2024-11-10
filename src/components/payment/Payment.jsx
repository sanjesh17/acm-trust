import React, { useState, useEffect } from "react";
import "./payment.css";
import PaymentQR from "../../assets/qr-code.jpeg";

const Payment = ({ donateType }) => {
  const [QR, setQR] = useState(false);
  const [payee, setPayee] = useState({
    payeeName: "",
    payeeLocation: "",
    payeeNumber: "",
    payeeAmount: "",
  });

  useEffect(() => {
    if (donateType === "hidden") {
      setQR(true);
    }
  }, [donateType]);

  const handleChange = (e) => {
    setPayee({ ...payee, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (
      !payee.payeeName ||
      !payee.payeeLocation ||
      !payee.payeeNumber ||
      !payee.payeeAmount
    ) {
      window.alert("Enter all the details!");
    } else {
      setQR(true);
    }
  };

  if (!QR) {
    return (
      <div className="payment-box-container">
        <h1>Donate</h1>
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
        <div className="payment-card-container">
          <div className="payment-details-container">
            <form action="">
              <div className="payee-name payee">
                <label className="no-name">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="payeeName"
                  onChange={handleChange}
                />
              </div>
              <div className="payee-location payee">
                <label>Location</label>
                <input
                  type="text"
                  placeholder="Enter your location"
                  name="payeeLocation"
                  onChange={handleChange}
                />
              </div>
              <div className="payee-ph payee">
                <label>Contact Number</label>
                <input
                  type="text"
                  placeholder="Enter your number"
                  name="payeeNumber"
                  onChange={handleChange}
                />
              </div>
              <div className="payee-amount payee">
                <label>₹ Amount</label>
                <input
                  type="number"
                  placeholder="Enter the amount"
                  name="payeeAmount"
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
        </div>
        <button
          className="button button-item"
          onClick={handlePayment}
          type="submit"
        >
          <span className="button-bg">
            <span className="button-bg-layers">
              <span className="button-bg-layer button-bg-layer-1 -purple" />
              <span className="button-bg-layer button-bg-layer-2 -turquoise" />
              <span className="button-bg-layer button-bg-layer-3 -yellow" />
            </span>
          </span>
          <span className="button-inner">
            <span className="button-inner-static">Proceed</span>
            <span className="button-inner-hover">Proceed</span>
          </span>
        </button>
      </div>
    );
  } else {
    return (
      <div className="payment-image-box-container">
        <div className="payment-image-container">
          <img src={PaymentQR} alt="QR Code" />
        </div>
      </div>
    );
  }
};

export default Payment;
