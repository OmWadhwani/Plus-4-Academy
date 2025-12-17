import React from "react";
import { Link } from "react-router-dom";

export default function RefundPolicyPage() {
  const contactInfo = {
    email: "plus4academy2025@gmail.com",
    phone: "+91-70892-12222",
    address: "Near Olympus Cafe, Jai Nagar, Jabalpur (Madhya Pradesh)",
  };

  const policyData = [
    {
      icon: "💳",
      title: "Admission & Fee Payment",
      content: [
        "All fees paid to Plus 4 Academy are towards academic services, faculty time, study planning, and infrastructure costs.",
        "Admission is confirmed only after successful payment of the applicable fees.",
        "Fees once paid are considered acknowledgment of acceptance of our teaching methodology, schedule, and policies.",
      ],
    },
    {
      icon: "🔄",
      title: "Refund Eligibility",
      subsections: [
        {
          subtitle: "Classroom / Offline Courses",
          content: [
            "Fees once paid are non-refundable and non-transferable under any circumstances.",
            "No refund will be provided for: Change of mind after enrollment, irregular attendance or discontinuation by the student, change of school, city, board, or academic plans, unsatisfactory performance or personal expectations, absence due to illness or personal reasons.",
          ],
        },
        {
          subtitle: "Online / Digital Programs (If Applicable)",
          content: [
            "In case access to online content has been provided, no refund will be issued once the account has been activated or study material shared.",
          ],
        },
      ],
    },
    {
      icon: "📚",
      title: "Batch Change & Course Upgrade",
      content: [
        "Batch change requests may be considered subject to availability and administrative approval.",
        "Course upgrades or changes, if permitted, may require payment of the fee difference.",
        "Refunds will not be granted for partial course completion.",
      ],
    },
    {
      icon: "⏸️",
      title: "Discontinuation of Course by Student",
      content: [
        "If a student chooses to discontinue the course mid-session for any reason, no refund of fees will be provided.",
        "Course fees cannot be adjusted or carried forward to future batches.",
      ],
    },
    {
      icon: "🏢",
      title: "Cancellation by Plus 4 Academy",
      content: [
        "In rare cases, if Plus 4 Academy cancels a batch due to unavoidable circumstances:",
        "A pro-rata refund may be considered for the unused portion of the course, after deducting administrative charges.",
        "Such decisions remain at the sole discretion of Plus 4 Academy.",
      ],
    },
    {
      icon: "🎁",
      title: "Scholarships, Discounts & Offers",
      content: [
        "Fees paid under scholarship, discount, or promotional offers are strictly non-refundable.",
        "Any concession given is temporary and does not affect refund eligibility.",
      ],
    },
    {
      icon: "💰",
      title: "Mode of Refund (If Applicable)",
      content: [
        "Approved refunds, if any, will be processed within 15–30 working days.",
        "Refunds will be credited via the original mode of payment only.",
        "No cash refunds will be made.",
      ],
    },
    {
      icon: "⚖️",
      title: "Dispute Resolution",
      content: [
        "In case of any dispute, the decision of Plus 4 Academy management shall be final and binding.",
        "All disputes will be subject to the jurisdiction of Jabalpur courts only.",
      ],
    },
    {
      icon: "📝",
      title: "Policy Updates",
      content: [
        "Plus 4 Academy reserves the right to modify or update this Refund Policy at any time without prior notice.",
        "The latest version of the policy will always be available on the official website.",
      ],
    },
  ];

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="refund-policy-page">
      {/* Header */}
      <header className="refund-header">
        <div className="refund-header-container">
          <h1 className="refund-logo">Plus 4 Academy</h1>
          <Link to="/" className="refund-back-button">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="refund-main">
        {/* Title Section */}
        <div className="refund-title-section">
          <h2 className="refund-page-title">Refund Policy</h2>
          <div className="refund-title-divider"></div>
          <p className="refund-intro">
            At Plus 4 Academy, we are committed to providing high-quality
            educational services with complete transparency. This Refund Policy
            outlines the terms and conditions under which refunds, if any, may
            be processed.
          </p>
        </div>

        {/* Notice Box */}
        <div className="refund-notice-box">
          <p>
            <span className="refund-notice-label">Important Notice:</span> By
            enrolling in any course or program offered by Plus 4 Academy, the
            student and/or parent/guardian agrees to the terms stated below.
          </p>
        </div>

        {/* Policy Cards */}
        <div className="refund-cards-container">
          {policyData.map((section, index) => (
            <div key={index} className="refund-policy-card">
              <div className="refund-card-content">
                <div className="refund-card-header-section">
                  <div className="refund-card-icon-large">{section.icon}</div>
                  <div className="refund-card-text">
                    <h3 className="refund-section-title">
                      {index + 1}. {section.title}
                    </h3>

                    {section.subsections ? (
                      <div className="refund-subsections-container">
                        {section.subsections.map((sub, subIndex) => (
                          <div key={subIndex} className="refund-subsection-box">
                            <h4 className="refund-subsection-title">
                              {sub.subtitle}
                            </h4>
                            <ul className="refund-content-list">
                              {sub.content.map((item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="refund-list-item"
                                >
                                  <span className="refund-arrow">→</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="refund-content-list">
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="refund-list-item">
                            <span className="refund-bullet">•</span>
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
        <div className="refund-contact-section">
          <h3 className="refund-contact-title">Contact Information</h3>
          <p className="refund-contact-subtitle">
            For any queries related to admissions or policies, you may contact:
          </p>

          <div className="refund-contact-grid">
            <a
              href={`mailto:${contactInfo.email}`}
              className="refund-contact-card"
            >
              <span className="refund-contact-icon">📧</span>
              <div>
                <div className="refund-contact-label">Email</div>
                <div className="refund-contact-value">{contactInfo.email}</div>
              </div>
            </a>

            <a
              href={`tel:${contactInfo.phone}`}
              className="refund-contact-card"
            >
              <span className="refund-contact-icon">📞</span>
              <div>
                <div className="refund-contact-label">Phone</div>
                <div className="refund-contact-value">{contactInfo.phone}</div>
              </div>
            </a>

            <a
              href="https://www.google.com/maps/place/Impulse+Academy+for+9th+to+12th+JEE+%26+NEET/@23.1682732,79.9101106,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="refund-contact-card"
            >
              <span className="refund-contact-icon">📍</span>
              <div>
                <div className="refund-contact-label">Address</div>
                <div className="refund-contact-value">
                  {contactInfo.address}
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="refund-footer-note">
          <p>Last Updated: December 2025</p>
          <p>© 2025 Plus 4 Academy. All rights reserved.</p>
        </div>
      </main>
    </div>
  );
}
