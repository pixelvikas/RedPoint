import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { MdArrowOutward } from "react-icons/md";
import abouthero from "../../assets/bc-page.jpg";
import "./style.css";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Hero Section */}
      <div className="about-page-hero">
        <img src={abouthero} alt="About Us" className="about-page-hero-image" />
        <div className="about-page-overlay"></div>
        <div className="about-page-hero-text">
          <p>HOME / CONTACT</p>
          <h1>CONTACT</h1>
        </div>
      </div>

      {/* Contact Content */}
      <div className="contact-content">
        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <h2 className="section-title">
              CONTACT <span className="highlight">INFORMATION</span>
            </h2>
            <p className="section-description">
              Reach out to us through any of these channels
            </p>

            {/* Map */}
            <div className="map-container">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3131.964532322765!2d72.894518275206!3d19.101551682108305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDA2JzA1LjYiTiA3MsKwNTMnNDkuNSJF!5e1!3m2!1sen!2sin!4v1748284793993!5m2!1sen!2sin"
                className="map-iframe"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Details */}
            <div className="contact-details">
              <div className="detail-item">
                <FaMapMarkerAlt className="detail-icon" />
                <div>
                  <h3>Address</h3>
                  <p>
                    Redpoint Enterprise, Nathibai Sadan, Pipe Line, Mohili
                    Village, Sakinaka, Mohili Village, Mumbai, Maharashtra
                    400072
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <FaEnvelope className="detail-icon" />
                <div>
                  <h3>Email</h3>
                  <a href="mailto:info@thriftconceptsllp.com">
                    info@redpointenterprise.com
                  </a>
                </div>
              </div>

              <div className="detail-item">
                <FaPhone className="detail-icon" />
                <div>
                  <h3>Phone</h3>
                  <a href="tel:+919324389141">+91 8779567749</a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="social-media">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="#" aria-label="Instagram" className="social-icon">
                  <FaInstagram />
                </a>
                <a href="#" aria-label="LinkedIn" className="social-icon">
                  <FaLinkedinIn />
                </a>
                <a href="#" aria-label="Twitter" className="social-icon">
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h2 className="section-title">
              LET'S <span className="highlight">CONNECT</span>
            </h2>
            <p className="section-subtitle">Free consultation available</p>

            <form className="form">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Full Name / Company Name"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  className="form-textarea"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Book a Free Appointment
                <MdArrowOutward className="arrow-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
