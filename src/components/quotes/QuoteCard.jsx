import React from "react";
import "./quotecard.css";
import { FaQuoteLeft } from "react-icons/fa6";
import withFadeInAnimation from "../../hooks/withFadeInAnimation";
import "../../hooks/fadeinanimation.css";

const QuoteCard = () => {
  return (
    <div className="quote-container">
      <FaQuoteLeft className="quote-icon" />
      <h2>Alone we can do so little, together we can do so much.</h2>
      <h3>Helen Keller</h3>
    </div>
  );
};

export default withFadeInAnimation(QuoteCard);
