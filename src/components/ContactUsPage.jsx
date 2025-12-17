import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./ContactUsPage.css";

export default function ContactUsPage() {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const contactCards = [
    {
      icon: "📧",
      title: "Email Us",
      value: "plus4academy2025@gmail.com",
      href: "mailto:plus4academy2025@gmail.com",
      color: "#8b5cf6",
    },
    {
      icon: "📞",
      title: "Call Us",
      value: "+91-70892-12222",
      href: "tel:+917089212222",
      color: "#10b981",
    },
    {
      icon: "📍",
      title: "Visit Us",
      value: "Near Olympus Cafe, Jai Nagar, Jabalpur",
      href: "https://www.google.com/maps/place/Impulse+Academy+for+9th+to+12th+JEE+%26+NEET/@23.1682732,79.9101106,17z",
      color: "#f59e0b",
    },
  ];

  // Phone number validation
  const validatePhoneNumber = (text) => {
    const phoneRegex = /\b\d{10}\b/;
    return phoneRegex.test(text);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitStatus({ type: "", message: "" });

    if (!message.trim()) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a message before sending.",
      });
      return;
    }

    if (!validatePhoneNumber(message)) {
      setSubmitStatus({
        type: "error",
        message: "Please add your 10 digit mobile number in the message.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace these with your actual EmailJS credentials
      const serviceID = "service_kgvivtp";
      const templateID = "template_99a09nf";
      const publicKey = "YfbilSS9eKRLbXBo5";

      const templateParams = {
        message: message,
        to_email: "plus4academy2025@gmail.com",
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! We will contact you soon.",
      });
      setMessage("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-us-page">
      {/* Header */}
      <header className="contact-header">
        <div className="contact-header-container">
          <h1 className="contact-logo">Plus 4 Academy</h1>
          <Link to="/" className="contact-back-button">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="contact-main">
        {/* Title Section */}
        <div className="contact-title-section">
          <h2 className="contact-page-title">Get In Touch</h2>
          <div className="contact-title-divider"></div>
          <p className="contact-intro">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="contact-cards-grid">
          {contactCards.map((card, index) => (
            <a
              key={index}
              href={card.href}
              target={card.title === "Visit Us" ? "_blank" : undefined}
              rel={
                card.title === "Visit Us" ? "noopener noreferrer" : undefined
              }
              className="contact-info-card"
              style={{ "--card-color": card.color }}
            >
              <div className="contact-card-icon">{card.icon}</div>
              <h3 className="contact-card-title">{card.title}</h3>
              <p className="contact-card-value">{card.value}</p>
              <div className="contact-card-overlay"></div>
            </a>
          ))}
        </div>

        {/* Message Section */}
        <div className="message-section">
          <div className="message-info-box">
            <p className="message-info-text">
              <strong>Have some query?</strong> Message us here and we will
              contact you soon. Don't forget to mention your{" "}
              <strong>name</strong> and <strong>phone number</strong> so we can
              revert you. Thanks!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="message-form">
            <textarea
              className="message-textarea"
              placeholder="Enter your message here (Please include your name and 10-digit phone number)..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="6"
            ></textarea>

            {submitStatus.message && (
              <div className={`submit-status ${submitStatus.type}`}>
                {submitStatus.type === "error" ? "⚠️" : "✅"}{" "}
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              className="message-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <span className="send-icon">✉️</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="contact-map-section">
          <h3 className="map-section-title">Find Us Here</h3>
          <div className="map-container">
            <iframe
              title="Plus 4 Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.0527937410125!2d79.9101105750965!3d23.168273179071843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b1e443ba7ae9%3A0x8d5198b9057ce29a!2sImpulse%20Academy%20for%209th%20to%2012th%20JEE%20%26%20NEET!5e0!3m2!1sen!2sin!4v1765795105607!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

