"use client";

import { useNavigate } from "react-router-dom";

export default function Hero({ onEnquireClick }) {
  const navigate = useNavigate();

  const handleDemoClick = () => {
    window.open("https://www.youtube.com/@Plusfouracademy", "_blank");
  };

  const handleCoursesClick = () => {
    navigate("/courses");
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Building Strong Foundations for Boards, JEE & NEET
          </h1>
          <p className="hero-subtitle">
            Expert concept-driven coaching for Class 9-12 with integrated board
            and competitive exam preparation.
          </p>

          <button className="hero-button" onClick={onEnquireClick}>
            Enquire Now
          </button>
        </div>

        <div className="hero-cards">
          <div className="hero-card hero-card-purple" onClick={handleDemoClick}>
            <span className="card-text">Watch our demo lectures</span>
            <span className="card-hover-text">Click here</span>
          </div>

          <div
            className="hero-card hero-card-orange"
            onClick={handleCoursesClick}
          >
            <span className="card-text">Courses we offer</span>
            <span className="card-hover-text">Click here</span>
          </div>
        </div>
      </div>
    </section>
  );
}
