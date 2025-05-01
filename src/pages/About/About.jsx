import React from "react";

import { AiFillCheckCircle } from "react-icons/ai";
import { FaTag, FaTshirt } from "react-icons/fa";

import abouthero from "../../assets/bc-page.jpg";
import aboutimg1 from "../../assets/ab-img1.jpg";
import aboutimg2 from "../../assets/ab-img2.jpg";

import aboutnobg from "../../assets/aboutno-bg.png";
import "./style.css";

const About = () => {
  return (
    <>
      <div className="about-page-container">
        {/* Hero Section */}
        <div className="about-page-hero">
          <img
            src={abouthero}
            alt="About Us"
            className="about-page-hero-image"
          />
          <div className="about-page-overlay"></div>
          <div className="about-page-hero-text">
            <p>HOME / ABOUT US</p>
            <h1>ABOUT US</h1>
          </div>
        </div>
      </div>

      {/* About Content Section */}
      <section className="about-content">
        <div className="about-intro">
          <h2>
            YOUR TRUSTED DESTINATION FOR PROFESSIONAL SAFETY WEAR AND INDUSTRIAL
            UNIFORMS
          </h2>
          <p>
            We are a growing network of safety wear specialists, dedicated to
            equipping the workforce with high-quality protective suits and
            industrial gear. With a strong footprint across industries and a
            commitment to reliability, we’re here to support those who keep the
            world moving—safely and confidently.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-box">
            <img
              src={aboutimg1}
              alt="Business Idea"
              className="about-box-image"
            />
            <h3>OUR MISSION</h3>
            <p>
              We sell workwear, work gloves and work shoes for professionals
              with high demands on function, quality, safety and design. We sell
              our products through our online shop or through direct agreements
              with our customer management.
            </p>
          </div>

          <div className="about-box">
            <img src={aboutimg2} alt="Our Vision" className="about-box-image" />
            <h3>OUR VISION</h3>
            <p>
              To become a globally recognized leader in workwear, safety gloves,
              protective footwear, and professional apparel—designed to support
              and simplify the work of professionals across diverse industries.
            </p>
          </div>

          <div className="trusted-safety">
            <h3>A TRUSTED NAME IN SAFETY</h3>
            <p>
              Our reputation is built not only on the extensive range of our
              product offerings but also on our unwavering commitment to service
              excellence. We go beyond gear—we deliver trust and performance.
            </p>
            <ul className="trusted-safety-list">
              <li>
                <AiFillCheckCircle className="list-icon" />
                <strong> QUALITY PRODUCTS</strong> - High standards and durable
                materials.
              </li>
              <li>
                <FaTshirt className="list-icon" />
                <strong> CUSTOM BRANDING</strong> - Personalized branding
                options available.
              </li>
              <li>
                <FaTag className="list-icon" />
                <strong> COMPETITIVE PRICING</strong> - Fair prices with
                top-notch quality.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="marquee-container">
        <div className="marquee-text">
          BUILT FOR WORK &nbsp; * &nbsp; SOCIALLY RESPONSIBLE &nbsp; * &nbsp;
          BUILT FOR WORK &nbsp; * &nbsp; SOCIALLY RESPONSIBLE
        </div>
      </div>

      <div className="stats-container">
        <img src={aboutnobg} alt="Background" className="stats-background" />
        <div className="stats-overlay">
          <div className="stats-box">
            <h1>24+</h1>
            <p>Years in Business</p>
          </div>
          <div className="stats-box">
            <h1>12+</h1>
            <p>Worldwide Stores</p>
          </div>
          <div className="stats-box">
            <h1>135+</h1>
            <p>Trusted Experts</p>
          </div>
          <div className="stats-box">
            <h1>89K</h1>
            <p>Satisfied Customers</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
