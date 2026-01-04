import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

import img9th from "../assets/9th_foundation.jpg";
import img10th from "../assets/10th_foundation.jpg";
import img11Jee from "../assets/11_jee.jpg";
import img11Neet from "../assets/11_neet.jpg";
import img12Jee from "../assets/12_jee.jpg";
import img12Neet from "../assets/12_neet.jpg";
import imgJeeCrash from "../assets/jee_crash.png";
import imgNeetCrash from "../assets/neet_crash.png";
export default function CourseDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { addToCart, isInCart } = useCart();

  const coursesData = {
    1: {
      id: 1,
      title: "Class 9 Foundation Course",
      shortDescription: "Strong Basics. Smart Start. Confident Future.",
      price: 14999,
      image: img9th,
      fullDescription:
        "The Class 9 Foundation Course at Plus 4 Academy is designed to build a rock-solid base in Physics, Chemistry, Mathematics, and Biology aligned with NCERT & school curriculum. This course focuses on concept clarity, logical thinking, and problem-solving skills that are essential for future competitive exams like JEE and NEET.",
      features: [
        "NCERT-focused + concept enrichment",
        "Regular practice questions & worksheets",
        "Doubt-solving support",
        "Early exposure to competitive-level thinking",
        "Periodic tests & performance analysis",
      ],
      ideal: "Ideal for students aiming for long-term academic excellence.",
    },
    2: {
      id: 2,
      title: "Class 10th Foundation Course",
      shortDescription: "Board Excellence + Competitive Readiness",
      price: 18999,
      image: img10th,
      fullDescription:
        "The Class 10 Course at Plus 4 Academy ensures complete syllabus coverage with special emphasis on board exam preparation while strengthening fundamentals required for JEE & NEET. Concepts are taught with real-life examples and exam-oriented practice.",
      features: [
        "NCERT-based teaching with advanced problem sets",
        "Board-focused preparation strategy",
        "Chapter-wise tests & revision modules",
        "Concept-driven learning approach",
        "Personal mentorship & guidance",
      ],
      ideal: "👉 Perfect balance of boards + competitive foundation.",
    },
    3: {
      id: 3,
      title: "Class 11 JEE Course",
      shortDescription: "Master Concepts. Crack the Competition.",
      price: 39999,
      image: img11Jee,
      fullDescription:
        "The Class 11 JEE Course at Plus 4 Academy is designed to build strong conceptual understanding of Physics, Chemistry, and Mathematics as per JEE Main & Advanced standards. This year forms the backbone of JEE preparation, and we ensure no gaps remain.",
      features: [
        "Advanced concept teaching (JEE level)",
        "Daily Practice Problems (DPPs)",
        "JEE Main & Advanced pattern tests",
        "Doubt clearing & performance tracking",
        "Strong focus on problem-solving techniques",
      ],
      ideal: "👉 Foundation year for serious JEE aspirants.",
    },

    4: {
      id: 4,
      title: "Class 11 NEET Course",
      shortDescription: "Build Medical Dreams from Day One",
      price: 39999,
      image: img11Neet,
      fullDescription:
        "The Class 11 NEET Course at Plus 4 Academy focuses on NCERT-centric Biology, Physics, and Chemistry, strictly aligned with the NEET exam pattern. Special attention is given to concept clarity, accuracy, and long-term retention.",
      features: [
        "NCERT-focused Biology teaching",
        "Conceptual Physics & Chemistry",
        "NEET-based MCQ practice",
        "Regular tests with detailed analysis",
        "Doubt-solving & mentoring support",
      ],
      ideal: "👉 Designed for future doctors with a clear NEET vision.",
    },

    5: {
      id: 5,
      title: "Class 12 JEE Course",
      shortDescription: "Refine, Revise & Rank Higher",
      price: 44999,
      image: img12Jee,
      fullDescription:
        "The Class 12 JEE Course is aimed at advanced problem solving, complete syllabus coverage, and exam-oriented strategies for JEE Main & Advanced. Students are trained to tackle complex questions with speed and accuracy.",
      features: [
        "Complete Class 12 syllabus (JEE level)",
        "High-level problem solving sessions",
        "JEE pattern mock tests",
        "Time management & exam strategy",
        "Personalized feedback & guidance",
      ],
      ideal: "👉 For aspirants targeting top IITs & NITs.",
    },

    6: {
      id: 6,
      title: "Class 12 NEET Course",
      shortDescription: "Precision. Practice. Performance.",
      price: 44999,
      image: img12Neet,
      fullDescription:
        "The Class 12 NEET Course at Plus 4 Academy ensures deep NCERT coverage, extensive MCQ practice, and exam-specific strategies to maximize NEET scores. The focus is on accuracy, revision, and confidence building.",
      features: [
        "NCERT-based teaching (must for NEET)",
        "High-yield Biology focus",
        "Physics & Chemistry MCQ drills",
        "Full-length NEET mock tests",
        "Detailed performance analysis",
      ],
      ideal: "👉 Built for students aiming for top medical colleges.",
    },

    7: {
      id: 7,
      title: "JEE Crash Course",
      shortDescription: "Last-Minute Power Boost for JEE",
      price: 8999,
      image: imgJeeCrash,
      fullDescription:
        "The JEE Crash Course is an intensive fast-track program designed for students who want quick revision, focused problem practice, and winning exam strategies just before JEE Main & Advanced.",
      features: [
        "Important topics & formula revision",
        "High-probability JEE questions",
        "Short tricks & time-saving methods",
        "Full-length mock tests",
        "Exam-oriented guidance",
      ],
      ideal: "👉 Ideal for final revision & rank improvement.",
    },

    8: {
      id: 8,
      title: "NEET Crash Course",
      shortDescription: "Revise Smart. Score High.",
      price: 8999,
      image: imgNeetCrash,
      fullDescription:
        "The NEET Crash Course at Plus 4 Academy focuses on rapid revision, NCERT-based MCQs, and exam temperament building to help students maximize their NEET score in limited time.",
      features: [
        "High-weightage topic coverage",
        "NCERT line-by-line revision",
        "NEET-level MCQ practice",
        "Mock tests with detailed analysis",
        "Final exam strategy & confidence building",
      ],
      ideal: "👉 Perfect for last-phase NEET preparation.",
    },
  };

  const course = coursesData[courseId];

  if (!course) {
    return (
      <div className="course-detail-page">
        <div className="course-not-found">
          <h2>Course Not Found</h2>
          <Link to="/courses" className="back-to-courses-btn">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(course);
    navigate("/cart");
  };

  return (
    <div className="course-detail-page">
      <header className="course-detail-header">
        <div className="course-detail-header-container">
          <h1 className="course-detail-logo">Plus 4 Academy</h1>
          <div className="course-detail-nav">
            <Link to="/" className="course-detail-nav-link">
              Home
            </Link>
            <Link to="/courses" className="course-detail-nav-link">
              Courses
            </Link>
            <Link
              to="/cart"
              className="course-detail-nav-link course-detail-cart-link"
            >
              Cart 🛒
            </Link>
          </div>
        </div>
      </header>

      <main className="course-detail-main">
        <div className="course-detail-container">
          <div className="course-detail-image-section">
            <img
              src={course.image}
              alt={course.title}
              className="course-detail-image"
            />
          </div>

          <div className="course-detail-content">
            <h1 className="course-detail-title">{course.title}</h1>
            <p className="course-detail-short-desc">
              {course.shortDescription}
            </p>

            <div className="course-detail-price-section">
              <div className="course-detail-price">
                ₹{course.price.toLocaleString("en-IN")}
              </div>
            </div>

            <div className="course-detail-description">
              <p>{course.fullDescription}</p>
            </div>

            <div className="course-detail-features">
              <h3 className="features-title">Key Features:</h3>
              <ul className="features-list">
                {course.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="course-detail-ideal">
              <p>👉 {course.ideal}</p>
            </div>

            <button
              className={`course-detail-add-btn ${
                isInCart(course.id) ? "in-cart" : ""
              }`}
              onClick={handleAddToCart}
              disabled={isInCart(course.id)}
            >
              {isInCart(course.id) ? "Already in Cart ✓" : "Add to Cart"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
