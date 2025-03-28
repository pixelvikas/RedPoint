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
              "When you’re moving from your old house to a new location, there
              are thousands of things to betaken care of. We’ll be your
              assistants, helping you move all your belongings fast wherever you
              wish."
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
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Our Team</a>
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
                <a href="tel:+02222334455" aria-label="Call us">
                  +022-22334455
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
        <p>© 2024 Pixel Vikas</p>
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
