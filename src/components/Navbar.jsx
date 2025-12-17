"use client";
import logo from "../assets/SiteLogo.png";
import { Link } from "react-router-dom";

export default function Navbar({
  onHomeClick,
  onAboutClick,
  onGalleryClick,
  onReviewsClick,
  onJoinClick,
  onContactClick,
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img
            src={logo}
            alt="Plus 4 Academy Logo"
            className="navbar-logo-img"
          />
        </div>

        <button
          className="hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
          <button onClick={onHomeClick} className="nav-link">
            Home
          </button>
          <button onClick={onAboutClick} className="nav-link">
            About Us
          </button>
          <button onClick={onGalleryClick} className="nav-link">
            Our Gallery
          </button>
          <button onClick={onReviewsClick} className="nav-link" >
            Reviews
          </button>
          <Link
            to="/ContactUs"
            className="nav-link" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
          <button onClick={onJoinClick} className="nav-link cta-button">
            Join Us
          </button>
        </div>
      </div>
    </nav>
  );
}
