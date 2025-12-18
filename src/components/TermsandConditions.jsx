"use client";

import React from "react";
import { Link } from "react-router-dom";

export default function TermsandConditions() {
  const contactInfo = {
    email: "plus4academy2025@gmail.com",
    phone: "+91-70892-12222",
    address: "Near Olympus Cafe, Jai Nagar, Jabalpur (Madhya Pradesh)",
  };

  const termsData = [
    {
      icon: "✅",
      title: "Acceptance of Terms",
      content: [
        "By enrolling at Plus 4 Academy or using our services, you agree to comply with and be bound by these Terms and Conditions.",
        "If you do not agree with any part of these terms, please do not enroll or use our services.",
        "These terms apply to all students, parents, and guardians who interact with Plus 4 Academy, whether through in-person classes, online sessions, or any other medium.",
      ],
    },
    {
      icon: "📝",
      title: "Enrollment and Admission",
      content: [
        "Admission to Plus 4 Academy is subject to availability and completion of the registration process.",
        "All information provided during enrollment must be accurate and complete. False information may result in cancellation of admission.",
        "Parents/guardians must complete all required documentation and submit necessary forms before the student begins classes.",
        "Plus 4 Academy reserves the right to refuse admission to any student at its sole discretion.",
      ],
    },
    {
      icon: "💰",
      title: "Fee Structure and Payment",
      subsections: [
        {
          subtitle: "Payment Terms",
          content: [
            "Tuition fees must be paid in full by the specified due date as mentioned in the fee schedule.",
            "Late payments may incur additional charges or result in suspension of services until payment is received.",
            "Once paid, tuition fees are non-refundable except as outlined in our refund policy.",
            "Fee structures are subject to change with prior notice to enrolled students.",
          ],
        },
      ],
    },
    {
      icon: "🔄",
      title: "Refund and Cancellation Policy",
      subsections: [
        {
          subtitle: "Refund Eligibility",
          content: [
            "Refund requests must be submitted in writing within 7 days of enrollment for new students.",
            "After classes commence, fees are non-refundable except in cases of medical emergencies with valid documentation.",
            "If Plus 4 Academy cancels a course or program, a full refund will be provided.",
            "Registration fees and admission charges are non-refundable under any circumstances.",
          ],
        },
      ],
    },
    {
      icon: "👨‍🎓",
      title: "Student Conduct and Discipline",
      content: [
        "Students are expected to maintain proper conduct and respect towards faculty, staff, and fellow students.",
        "Students must attend classes regularly and punctually.",
        "Disruptive behavior, cheating, or any form of academic dishonesty will not be tolerated.",
        "Students must respect academy property and facilities. Any damage caused will be charged to the student.",
        "Violation of conduct policies may result in warnings, suspension, or expulsion without refund.",
      ],
    },
    {
      icon: "📊",
      title: "Attendance and Academic Performance",
      content: [
        "Students are required to maintain a minimum of 75% attendance to remain enrolled in the program.",
        "Parents will be notified if a student's attendance falls below the required threshold.",
        "Plus 4 Academy provides regular assessments and progress reports. Parents are encouraged to monitor their child's performance.",
        "The academy reserves the right to remove students who consistently fail to meet academic or attendance requirements.",
      ],
    },
    {
      icon: "📚",
      title: "Intellectual Property and Study Materials",
      content: [
        "All study materials, notes, recordings, and content provided by Plus 4 Academy are the intellectual property of the academy and are protected by copyright laws.",
        "Students may not copy, distribute, or share academy materials without written permission.",
        "Unauthorized recording of classes or distribution of content is strictly prohibited.",
        "Violation of intellectual property rights may result in legal action and immediate expulsion.",
      ],
    },
    {
      icon: "⚠️",
      title: "Limitation of Liability",
      content: [
        "Plus 4 Academy strives to provide the best educational experience but cannot guarantee specific exam results or admission to competitive institutions.",
        "The academy is not responsible for student performance in board exams, JEE, NEET, or other competitive examinations.",
        "Plus 4 Academy is not liable for any personal injuries, loss of property, or accidents that occur on or off premises.",
        "Parents/guardians are responsible for their child's safety during commute to and from the academy.",
      ],
    },
    {
      icon: "🔒",
      title: "Privacy and Data Protection",
      content: [
        "Plus 4 Academy respects the privacy of students and their families. Personal information collected during enrollment is used solely for academic and administrative purposes.",
        "Student data will not be shared with third parties without consent, except as required by law.",
        "Parents have the right to request access to their child's academic records and personal information.",
        "The academy uses secure systems to protect student data from unauthorized access.",
      ],
    },
    {
      icon: "🔔",
      title: "Changes to Terms and Conditions",
      content: [
        "Plus 4 Academy reserves the right to modify these Terms and Conditions at any time.",
        "Changes will be communicated to enrolled students and parents through official channels.",
        "Continued enrollment after changes constitutes acceptance of the updated terms.",
      ],
    },
  ];

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style>{`
        .terms-policy-page {
          min-height: 100vh;
          background: linear-gradient(to bottom, #f9fafb, #ffffff);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }

        .terms-header {
          background: white;
          padding: 1.5rem 0;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .terms-header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .terms-logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #8b5cf6;
          margin: 0;
        }

        .terms-back-button {
          padding: 10px 24px;
  background: #8b5cf6;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  transition: all 0.3s ease;
        }

        .terms-back-button:hover {
          background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
        }

        .terms-main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 1.5rem;
        }

        .terms-title-section {
          text-align: center;
          margin-bottom: 3rem;
        }

        .terms-page-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #7c3aed;
          margin: 0 0 1rem 0;
        }

        .terms-title-divider {
          width: 80px;
          height: 4px;
          background: linear-gradient(to right, #7c3aed, #a855f7);
          margin: 0 auto 1.5rem;
          border-radius: 2px;
        }

        .terms-intro {
          font-size: 1.125rem;
          color: #6b7280;
          line-height: 1.7;
          max-width: 800px;
          margin: 0 auto;
        }

        .terms-notice-box {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          border-left: 4px solid #f59e0b;
          padding: 1.25rem;
          border-radius: 0.5rem;
          margin-bottom: 2.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .terms-notice-box p {
          margin: 0;
          color: #78350f;
          line-height: 1.6;
        }

        .terms-notice-label {
          font-weight: 700;
          color: #92400e;
        }

        .terms-cards-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .terms-policy-card {
          background: white;
          border-radius: 1rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          overflow: hidden;
          border: 1px solid #e5e7eb;
        }

        .terms-policy-card:hover {
          box-shadow: 0 10px 30px rgba(124, 58, 237, 0.15);
          transform: translateY(-4px);
        }

        .terms-card-content {
          padding: 2rem;
        }

        .terms-card-header-section {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }

        .terms-card-icon-large {
          font-size: 2.5rem;
          flex-shrink: 0;
        }

        .terms-card-text {
          flex: 1;
        }

        .terms-section-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 1rem 0;
        }

        .terms-subsections-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .terms-subsection-box {
          background: #f9fafb;
          padding: 1.25rem;
          border-radius: 0.5rem;
          border-left: 3px solid #7c3aed;
        }

        .terms-subsection-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #7c3aed;
          margin: 0 0 0.75rem 0;
        }

        .terms-content-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .terms-list-item {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          line-height: 1.6;
          color: #4b5563;
        }

        .terms-arrow {
          color: #7c3aed;
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .terms-bullet {
          color: #7c3aed;
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .terms-contact-section {
          background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
          padding: 2.5rem;
          border-radius: 1rem;
          margin-top: 3rem;
          color: white;
        }

        .terms-contact-title {
          font-size: 1.875rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          text-align: center;
        }

        .terms-contact-subtitle {
          text-align: center;
          margin: 0 0 2rem 0;
          opacity: 0.9;
        }

        .terms-contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.25rem;
        }

        .terms-contact-card {
          background: rgba(255, 255, 255, 0.15);
          padding: 1.25rem;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          color: white;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .terms-contact-card:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
        }

        .terms-contact-icon {
          font-size: 1.75rem;
          flex-shrink: 0;
        }

        .terms-contact-label {
          font-size: 0.875rem;
          opacity: 0.9;
          margin-bottom: 0.25rem;
        }

        .terms-contact-value {
          font-weight: 600;
          word-break: break-word;
        }

        .terms-footer-note {
          text-align: center;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid #e5e7eb;
          color: #6b7280;
        }

        .terms-footer-note p {
          margin: 0.5rem 0;
        }

        @media (max-width: 768px) {
          .terms-header {
            padding: 1rem 0;
          }

          .terms-logo {
            font-size: 1.125rem;
          }

          .terms-back-button {
            padding: 0.5rem 0.875rem;
            font-size: 0.875rem;
          }

          .terms-main {
            padding: 2rem 1rem;
          }

          .terms-page-title {
            font-size: 1.875rem;
          }

          .terms-intro {
            font-size: 1rem;
          }

          .terms-title-section {
            margin-bottom: 2rem;
          }

          .terms-card-content {
            padding: 1.25rem;
          }

          .terms-card-header-section {
            flex-direction: column;
            gap: 1rem;
          }

          .terms-card-icon-large {
            font-size: 2rem;
          }

          .terms-section-title {
            font-size: 1.25rem;
          }

          .terms-contact-section {
            padding: 1.5rem;
          }

          .terms-contact-title {
            font-size: 1.5rem;
          }

          .terms-contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .terms-page-title {
            font-size: 1.5rem;
          }

          .terms-back-button span {
            display: none;
          }

          .terms-back-button::after {
            content: 'Home';
          }
        }
      `}</style>

      <div className="terms-policy-page">
        {/* Header */}
        <header className="terms-header">
          <div className="terms-header-container">
            <h1 className="terms-logo">Plus 4 Academy</h1>
            <Link to="/" className="terms-back-button">
              <span>← Back to Home</span>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="terms-main">
          {/* Title Section */}
          <div className="terms-title-section">
            <h2 className="terms-page-title">Terms and Conditions</h2>
            <div className="terms-title-divider"></div>
            <p className="terms-intro">
              By enrolling at Plus 4 Academy or using our services, you agree to
              these Terms and Conditions. Please read them carefully to
              understand your rights and responsibilities as a student or
              guardian.
            </p>
          </div>

          {/* Notice Box */}
          <div className="terms-notice-box">
            <p>
              <span className="terms-notice-label">Important Notice:</span>{" "}
              These terms apply to all students, parents, and guardians who
              interact with Plus 4 Academy, whether through in-person classes,
              online sessions, or any other medium.
            </p>
          </div>

          {/* Policy Cards */}
          <div className="terms-cards-container">
            {termsData.map((section, index) => (
              <div key={index} className="terms-policy-card">
                <div className="terms-card-content">
                  <div className="terms-card-header-section">
                    <div className="terms-card-icon-large">{section.icon}</div>
                    <div className="terms-card-text">
                      <h3 className="terms-section-title">
                        {index + 1}. {section.title}
                      </h3>

                      {section.subsections ? (
                        <div className="terms-subsections-container">
                          {section.subsections.map((sub, subIndex) => (
                            <div
                              key={subIndex}
                              className="terms-subsection-box"
                            >
                              <h4 className="terms-subsection-title">
                                {sub.subtitle}
                              </h4>
                              <ul className="terms-content-list">
                                {sub.content.map((item, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    className="terms-list-item"
                                  >
                                    <span className="terms-arrow">→</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul className="terms-content-list">
                          {section.content.map((item, itemIndex) => (
                            <li key={itemIndex} className="terms-list-item">
                              <span className="terms-bullet">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="terms-contact-section">
            <h3 className="terms-contact-title">Questions or Concerns?</h3>
            <p className="terms-contact-subtitle">
              If you have any questions regarding these Terms and Conditions,
              please contact us:
            </p>

            <div className="terms-contact-grid">
              <a
                href={`mailto:${contactInfo.email}`}
                className="terms-contact-card"
              >
                <span className="terms-contact-icon">📧</span>
                <div>
                  <div className="terms-contact-label">Email</div>
                  <div className="terms-contact-value">{contactInfo.email}</div>
                </div>
              </a>

              <a
                href={`tel:${contactInfo.phone}`}
                className="terms-contact-card"
              >
                <span className="terms-contact-icon">📞</span>
                <div>
                  <div className="terms-contact-label">Phone</div>
                  <div className="terms-contact-value">{contactInfo.phone}</div>
                </div>
              </a>

              <a
                href="https://www.google.com/maps/place/Impulse+Academy+for+9th+to+12th+JEE+%26+NEET/@23.1682732,79.9101106,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="terms-contact-card"
              >
                <span className="terms-contact-icon">📍</span>
                <div>
                  <div className="terms-contact-label">Address</div>
                  <div className="terms-contact-value">
                    {contactInfo.address}
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Footer Note */}
          <div className="terms-footer-note">
            <p>Last Updated: December 2025</p>
            <p>© 2025 Plus 4 Academy. All rights reserved.</p>
          </div>
        </main>
      </div>
    </>
  );
}
