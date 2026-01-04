import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

// Import images
import img9th from "../assets/9th_foundation.jpg";
import img10th from "../assets/10th_foundation.jpg";
import img11Jee from "../assets/11_jee.jpg";
import img11Neet from "../assets/11_neet.jpg";
import img12Jee from "../assets/12_jee.jpg";
import img12Neet from "../assets/12_neet.jpg";
import imgJeeCrash from "../assets/jee_crash.png";
import imgNeetCrash from "../assets/neet_crash.png";

export default function Courses() {
  const navigate = useNavigate();
  const { addToCart, isInCart } = useCart();
  const [viewMode, setViewMode] = useState("vertical");

  const courses = [
    {
      id: 1,
      title: "Class 9 Foundation Course",
      description: "Strong Basics. Smart Start. Confident Future.",
      price: 14999,
      image: img9th,
    },
    {
      id: 2,
      title: "Class 10 Foundation Course",
      description: "Board Excellence + Competitive Readiness",
      price: 18999,
      image: img10th,
    },
    {
      id: 3,
      title: "Class 11 JEE Course",
      description: "Master Concepts. Crack the Competition.",
      price: 39999,
      image: img11Jee,
    },
    {
      id: 4,
      title: "Class 11 NEET Course",
      description: "Build Medical Dreams from Day One",
      price: 39999,
      image: img11Neet,
    },
    {
      id: 5,
      title: "Class 12 JEE Course",
      description: "Refine, Revise & Rank Higher",
      price: 44999,
      image: img12Jee,
    },
    {
      id: 6,
      title: "Class 12 NEET Course",
      description: "Precision. Practice. Performance.",
      price: 44999,
      image: img12Neet,
    },
    {
      id: 7,
      title: "JEE Crash Course",
      description: "Last-Minute Power Boost for JEE",
      price: 8999,
      image: imgJeeCrash,
    },
    {
      id: 8,
      title: "NEET Crash Course",
      description: "Revise Smart. Score High.",
      price: 8999,
      image: imgNeetCrash,
    },
  ];

  const handleAddToCart = (course) => {
    addToCart(course);
    navigate("/cart");
  };

  const handleExplore = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div className="courses-page">
      <header className="courses-header">
        <div className="courses-header-container">
          <h1 className="courses-logo">Plus 4 Academy</h1>
          <div className="courses-nav">
            <Link to="/" className="courses-nav-link">
              Home
            </Link>
            <Link to="/cart" className="courses-nav-link courses-cart-link">
              Cart 🛒
            </Link>
          </div>
        </div>
      </header>

      <main className="courses-main">
        <div className="courses-title-section">
          <h2 className="courses-page-title">Our Courses</h2>
          <div className="courses-title-divider"></div>
          <p className="courses-intro">
            Choose from our expertly designed courses to excel in your academic
            journey
          </p>
        </div>

        {/* Mobile View Toggle */}
        <div className="courses-view-toggle">
          <button
            className={`view-toggle-btn ${
              viewMode === "vertical" ? "active" : ""
            }`}
            onClick={() => setViewMode("vertical")}
          >
            Grid View
          </button>
          <button
            className={`view-toggle-btn ${
              viewMode === "horizontal" ? "active" : ""
            }`}
            onClick={() => setViewMode("horizontal")}
          >
            Scroll View
          </button>
        </div>

        <div
          className={`courses-grid ${
            viewMode === "horizontal" ? "horizontal-scroll" : ""
          }`}
        >
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div
                className="course-image-wrapper"
                onClick={() => handleExplore(course.id)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-image"
                />
              </div>
              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-description">{course.description}</p>
                <div className="course-footer">
                  <div className="course-price">
                    ₹{course.price.toLocaleString("en-IN")}
                  </div>
                </div>
                <div className="course-buttons">
                  <button
                    className="course-explore-btn"
                    onClick={() => handleExplore(course.id)}
                  >
                    Explore
                  </button>
                  <button
                    className={`course-add-btn ${
                      isInCart(course.id) ? "in-cart" : ""
                    }`}
                    onClick={() => handleAddToCart(course)}
                    disabled={isInCart(course.id)}
                  >
                    {isInCart(course.id) ? "In Cart ✓" : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
