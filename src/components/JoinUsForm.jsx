"use client";

import { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";

export default function JoinUsForm() {
  const ref = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    courseInterested: "Class 9 Foundation",
  });

  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phoneNumber") {
      const digitsOnly = value.replace(/\D/g, "");
      if (digitsOnly.length <= 10) {
        setFormData((prev) => ({ ...prev, phoneNumber: digitsOnly }));
        // Clear error when user types
        if (phoneError) setPhoneError("");
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.phoneNumber.length !== 10) {
      setPhoneError("Please enter 10 digit mobile number");
      return;
    }

    emailjs
      .send(
        "service_bdaxi9o",
        "template_xye3969",
        {
          fullName: formData.fullName,
          phoneNumber: formData.phoneNumber,
          courseInterested: formData.courseInterested,
        },
        "zLj_h-Xd_MFQwEg61"
      )
      .then(() => {
        setSubmitted(true);
        setPhoneError("");

        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            fullName: "",
            phoneNumber: "",
            courseInterested: "Class 9 Foundation",
          });
        }, 3000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send enquiry. Please try again.");
      });
  };

  return (
    <section className="join-us" ref={ref}>
      <div className="join-us-container">
        <div className="form-wrapper">
          <h2 className="form-title">Join Plus 4 Academy</h2>
          <p className="form-subtitle">
            Take the first step towards academic excellence
          </p>

          {/* ===== Beta Notice ===== */}
          <div className="beta-notice">
            <p>
              Please note: This is currently a beta version of our platform.
              While we strive for excellence, you may encounter minor issues
              that will be resolved in upcoming updates. We appreciate your
              patience and feedback.
            </p>

            <style>{`
              .beta-notice {
                background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
                border-left: 4px solid #f59e0b;
                padding: 16px 20px;
                margin-bottom: 24px;
                border-radius: 8px;
                box-shadow: 0 2px 8px rgba(245, 158, 11, 0.15);
                position: relative;
                overflow: hidden;
              }

              .beta-notice::before {
                content: "⚠";
                position: absolute;
                top: 50%;
                left: -8px;
                transform: translateY(-50%);
                font-size: 48px;
                color: rgba(245, 158, 11, 0.2);
                z-index: 0;
              }

              .beta-notice p {
                margin: 0;
                font-size: 14px;
                line-height: 1.6;
                color: #78350f;
                font-weight: 500;
                position: relative;
                z-index: 1;
              }

              .phone-error {
                background-color: #fee2e2;
                border: 1px solid #ef4444;
                border-radius: 6px;
                padding: 12px 16px;
                margin-top: 8px;
                margin-bottom: 16px;
                display: flex;
                align-items: center;
                gap: 8px;
                animation: slideDown 0.3s ease-out;
              }

              .phone-error-icon {
                color: #ef4444;
                font-size: 18px;
                font-weight: bold;
              }

              .phone-error-text {
                color: #dc2626;
                font-size: 14px;
                font-weight: 500;
                margin: 0;
              }

              @keyframes slideDown {
                from {
                  opacity: 0;
                  transform: translateY(-10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }

              .form-group.has-error input {
                border-color: #ef4444;
              }

              .form-group.has-error input:focus {
                border-color: #dc2626;
                box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
              }
            `}</style>
          </div>
          {/* ===== End Beta Notice ===== */}

          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <p>Thank you! We will contact you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className={`form-group ${phoneError ? "has-error" : ""}`}>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter 10-digit phone number"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  minLength={10}
                  maxLength={10}
                  required
                />
              </div>

              {phoneError && (
                <div className="phone-error">
                  <span className="phone-error-icon">⚠</span>
                  <p className="phone-error-text">{phoneError}</p>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="courseInterested">Course Interested In</label>
                <select
                  id="courseInterested"
                  name="courseInterested"
                  value={formData.courseInterested}
                  onChange={handleChange}
                >
                  <option>Class 9 Foundation</option>
                  <option>Class 10 Foundation</option>
                  <option>Class 11 – JEE/NEET (Science)</option>
                  <option>Class 12 – JEE/NEET (Science)</option>
                  <option>Droppers – JEE</option>
                  <option>Droppers – NEET</option>
                </select>
              </div>

              <button type="submit" className="submit-button">
                Submit Enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
