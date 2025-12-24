import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Contact Info */}
          <div className="footer-section contact-info">
            <h3>Plus Four Academy</h3>

            <p className="address">
              <a
                href="https://www.google.com/maps/place/Impulse+Academy+for+9th+to+12th+JEE+%26+NEET/@23.1682732,79.9101106,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                📍 Near Olympus Cafe, Jai Nagar, Jabalpur (Madhya Pradesh)
              </a>
            </p>

            <p className="notice-text">
              Consider reading the{" "}
              <Link to="/TermsAndConditions" className="refund-policy-link">
                Terms and Conditions
              </Link>{" "}
              of using this platform.<br></br> Also check the{""}
              <Link to="/RefundandCancellation" className="refund-policy-link">
                Refund Policy
              </Link>
            </p>
          </div>

          {/* Map Section */}
          <div className="footer-section map-section">
            <iframe
              title="Plus 4 Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.0527937410125!2d79.9101105750965!3d23.168273179071843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b1e443ba7ae9%3A0x8d5198b9057ce29a!2sImpulse%20Academy%20for%209th%20to%2012th%20JEE%20%26%20NEET!5e0!3m2!1sen!2sin!4v1765795105607!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {currentYear} Plus Four Academy. All rights reserved.</p>

          <div className="footer-bottom-links">
            <Link to="/RefundandCancellation" className="refund-policy-link">
              Refund Policy
            </Link>

            <Link to="/TermsAndConditions" className="refund-policy-link">
              Terms & Conditions
            </Link>

            <Link to="/ContactUs" className="contact-us-link">
              Contact Us
            </Link>
          </div>

          <div className="developer-credit">
            <span>Liked the website?</span>
            <a
              href="https://portfolio-i5u7.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="developer-link"
            >
              Meet the developer →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
