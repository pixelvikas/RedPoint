import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import MOLlogo from "../assets/logofooter.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {/* Logo and Social Media Section */}
          <div className="footer-logo">
            <img src={MOLlogo} alt="Thrift Concepts LLP" className="logo" />
            <p className="footer-text">
              "Delivering high-performance safety wear designed to withstand the
              toughest environments. Built for protection, trusted by
              professionals, and crafted with precision for every challenge."
            </p>
            <div className="social-icons">
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="Twitter (X)">
                <FaXTwitter />
              </a>
              <a href="#" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Categories</h3>
            <ul>
              <li>
                <a href="/products">TROUSERS</a>
              </li>
              <li>
                <a href="/products">JACKETS</a>
              </li>
              <li>
                <a href="/products">ACCESSORIES</a>
              </li>
              <li>
                <a href="/products">SUITS</a>
              </li>
              <li>
                <a href="/products">SHOES</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Contact</h3>

            <ul>
              <li>
                <SlLocationPin className="footer-contact" />
                <span>Redpoint Enterprise, Mumbai</span>
              </li>
              <li>
                <IoCallOutline className="footer-contact" />
                <a href="tel:8779567749" aria-label="Call us">
                  +91 8779567749
                </a>
              </li>
              <li>
                <CiMail className="footer-contact" />
                <a
                  href="mailto:Info@redpointenterprise.com"
                  aria-label="Email us"
                >
                  Info@redpointenterprise.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
      </footer>
      <div className="footer-bottom">
        <p>© 2025 Red Point Enterprise</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Services</a>
        </div>
        <p>All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
