import React, { useState } from "react";
import "./details.css";
import dimage from "../../assets/details-image.jpg";
import withFadeInAnimation from "../../hooks/withFadeInAnimation";
import "../../hooks/fadeinanimation.css";

const Details = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Where is Kaliyampoondi Village located?",
      answer:
        "Kaliyampoondi Village is located in the Uthiramerur Panchayat Union, Tamil Nadu, India.",
    },
    {
      question: "What is the history of Kaliyampoondi Village's governance?",
      answer:
        "The village's local self-government, the Village Panchayat, was constituted in 1922.",
    },
    {
      question: "How large is Kaliyampoondi Village?",
      answer:
        "Kaliyampoondi Village covers an area of 828.16 acres, which includes 299.27 acres of wet lands and 528.89 acres of dry lands.",
    },
    {
      question: "What irrigation facilities does Kaliyampoondi Village have?",
      answer:
        "The village benefits from irrigation facilities provided by three tanks, which supply water for six months.",
    },
    {
      question: "How many families live in Kaliyampoondi Village?",
      answer: "The village is home to 481 families.",
    },
    {
      question:
        "What was the role of Thiru O. Srinivasa Reddiar and Thiru A.K. Ramakrishna Reddiar in the village's development?",
      answer:
        "They were instrumental in forming the village's welfare association in 1948, playing a significant role in guiding the village’s development on Gandhian principles.",
    },
    {
      question:
        "What is the significance of the welfare association formed in Kaliyampoondi Village?",
      answer:
        "The welfare association, formed on 07.08.1948, focused on the overall development of the village in areas such as agriculture, education, healthcare, and rural industries, making it a model village in the state.",
    },
    {
      question:
        "What contributions did Thiru A.K. Ramakrishna Reddiar make to the Gramadhan Movement?",
      answer:
        "He donated more than 100 acres of land at Vayalur village to the Gramadhan Movement when Vinobaji toured Tamil Nadu in 1956.",
    },
    {
      question:
        "What kind of developmental programs have been implemented in Kaliyampoondi Village?",
      answer:
        "The village has implemented programs in agriculture, animal husbandry, education, cooperation, village industries, medical and sanitation services, rural housing, and communication, with the assistance of the government.",
    },
    {
      question: "What recognition has Kaliyampoondi Village received?",
      answer:
        "The village was recognized by the Government of Tamil Nadu for implementing a successful total prohibition program and was rewarded Rs. 250 for achieving the status of a model village.",
    },
    {
      question:
        "What notable institutions and facilities are present in Kaliyampoondi Village?",
      answer:
        "Kaliyampoondi Village hosts various institutions and facilities, including an elementary school, panchayat office, cooperative banks and societies, veterinary and rural dispensaries, a maternity and child welfare center, a community hall, a library, and a leprosy rehabilitation home, among others.",
    },
    {
      question:
        "Who are some of the notable personalities associated with Kaliyampoondi Village?",
      answer:
        "The village has been associated with various eminent personalities such as former governors and chief ministers of Tamil Nadu.",
    },
    {
      question:
        "What role did Kaliyampoondi Village play in the Gandhian and Sarvodaya Movements?",
      answer:
        "The village adopted Gandhian principles for its welfare activities and was actively involved in the Sarvodaya Movement, contributing significantly to the Gramadhan initiative.",
    },
    {
      question:
        "What services are provided by the community institutions in Kaliyampoondi Village?",
      answer:
        "Community institutions in Kaliyampoondi Village provide a wide range of services, including education, healthcare, agriculture support, cooperative banking, child welfare, and housing schemes.",
    },
    {
      question:
        "What achievements have been made by Kaliyampoondi Village in rural development?",
      answer:
        "Kaliyampoondi Village has successfully implemented various rural development programs, earning a reputation as a model village and securing government recognition for its efforts.",
    },
  ];

  return (
    <div className="detail-page-container">
      <div className="detail-page">
        <div className="detail-content-container">
          <h1 className="detail-title">The Story of Kaliyampoondi</h1>
          <svg
            className="detail-svg"
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
        </div>
        <div className="detail-image-container">
          <img className="detail-image" src={dimage} alt="Detail" />
        </div>
        <div className="detail-information-container">
          <div className="faq-section">
            {faqData.map((item, index) => (
              <div
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => toggleFAQ(index)}
                key={index}
              >
                <h3 className="faq-question">{item.question}</h3>
                <p className="faq-answer">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withFadeInAnimation(Details);
