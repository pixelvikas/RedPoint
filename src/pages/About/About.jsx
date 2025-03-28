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
            WE ARE THE WORKWEAR SPECIALIST DESTINATION FOR TRADE, SAFETY AND
            UNIFORMS
          </h2>
          <p>
            Axetor is Australia’s largest network of workwear specialist
            destinations for Trade, Safety and Uniforms. We are 90 stores
            strong, with bold plans for more. A steel-toe footprint stretching
            across the nation and working hard for our local communities.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-box">
            <img
              src={aboutimg1}
              alt="Business Idea"
              className="about-box-image"
            />
            <h3>BUSINESS IDEA</h3>
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
              We will be a global leading supplier of workwear, work gloves,
              work shoes and profile clothes for professionals from a wide range
              of occupations. The main purpose of our products is to facilitate
              the work of professionals.
            </p>
          </div>

          <div className="trusted-safety">
            <h3>TRUSTED NAME IN SAFETY</h3>
            <p>
              Our success in our market has been driven by not only the depth
              and breadth of our product range, but also our service commitment
              to our clients.
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
