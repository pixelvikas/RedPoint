import React from "react";
import "./style.css";
import Button from "../../components/Button";
import { FaRegStar, FaStar } from "react-icons/fa";
import product1 from "../../assets/product1.png";

import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";
import client4 from "../../assets/client4.png";
import client5 from "../../assets/client5.png";

import trousers from "../../assets/trousers.jpg";
import jackets from "../../assets/jackets.jpg";
import accessories from "../../assets/accessories.jpg";
import suits from "../../assets/suits.jpg";
import shoes from "../../assets/shoes.jpg";

import { HiMiniArrowLongRight } from "react-icons/hi2";

import { FaGlobeAmericas } from "react-icons/fa";
import { PiPackageFill } from "react-icons/pi";
import { FaClipboardCheck } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";

import testimonialbg from "../../assets/testimonialbg.jpg";
import customsamplebg from "../../assets/customsamplebg.png";

const Home = () => {
  const clientLogos = [
    { src: client1, alt: "Client 1" },
    { src: client2, alt: "Client 2" },
    { src: client3, alt: "Client 3" },
    { src: client4, alt: "Client 4" },
    { src: client5, alt: "Client 5" },
  ];
  const products = [
    {
      id: 1,
      image: product1,
      name: "HI-VIS SURVEYOR'S VEST",
      rating: 4,
      price: 29.99,
      category: "Jackets",
    },
    {
      id: 2,
      image: product1,
      name: "HARD HAT TYPE-II",
      rating: 5,
      price: 39.99,
      category: "Accessories",
    },
    {
      id: 3,
      image: product1,
      name: "HI-PRO GOGGLES",
      rating: 3,
      price: 19.99,
      category: "Accessories",
    },
    {
      id: 4,
      image: product1,
      name: "SAFETY BOOTS",
      rating: 4,
      price: 49.99,
      category: "Shoes",
    },
  ];
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) =>
        i < rating ? (
          <FaStar key={i} className="star-icon" />
        ) : (
          <FaRegStar key={i} className="star-icon" />
        )
      );
  };
  const categories = [
    { name: "TROUSERS", img: trousers },
    { name: "JACKETS", img: jackets },
    { name: "ACCESSORIES", img: accessories },
    { name: "SUITS", img: suits },
    { name: "SHOES", img: shoes },
  ];
  return (
    <>
      <div className="homepage-content">
        <div className="homepage" id="home">
          <h1>
            BUILT FOR PROTECTION,
            <br />
            DRIVEN BY SAFETY,
            <br />
            CRAFTED WITH EXCELLENCE.
          </h1>
          <div className="hero-buttons">
            <Button text="Explore" variant="primary" link="/products" />
            <Button
              text="Contact"
              variant="secondary"
              link="/contact"
              showIcon={true}
            />
          </div>
        </div>
      </div>

      <div className="products-section">
        <div className="bestseller-header">
          <h2>BEST SELLER</h2>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image-container">
                <img src={product.image} alt={product.name} loading="lazy" />
              </div>
              <div className="product-details">
                <h3 className="product-title">{product.name}</h3>
                <div className="product-rating">
                  <div className="stars">
                    {renderStars(product.rating)}
                    <span className="rating-value">({product.rating})</span>
                  </div>
                </div>
                <div className="product-price">${product.price.toFixed(2)}</div>
                <button className="view-button">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="clients" id="clients">
        <div className="slider">
          <div className="logos">
            <div className="logos-slide">
              {clientLogos.concat(clientLogos).map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  className="logo-item"
                  alt={logo.alt}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="categories-container">
        <h2>
          DISCOVER MOST{" "}
          <span className="highlight">
            POPULAR <br />
            CATEGORIES
          </span>{" "}
          FOR PROTECTION
        </h2>
        <div className="parent">
          <div className="category-item div1">
            <img src={trousers} alt="Trousers" />
            <div className="overlay">
              <h1>TROUSERS</h1>
              <button>
                CHECK IT NOW <HiMiniArrowLongRight />
              </button>
            </div>
          </div>
          <div className="category-item div2">
            <img src={jackets} alt="Jackets" />
            <div className="overlay">
              <h1>JACKETS</h1>
              <button>
                CHECK IT NOW <HiMiniArrowLongRight />
              </button>
            </div>
          </div>
          <div className="category-item div3">
            <img src={accessories} alt="Accessories" />
            <div className="overlay">
              <h1>ACCESSORIES</h1>
              <button>
                CHECK IT NOW <HiMiniArrowLongRight />
              </button>
            </div>
          </div>
          <div className="category-item div4">
            <img src={suits} alt="Suits" />
            <div className="overlay">
              <h1>SUITS</h1>
              <button>
                CHECK IT NOW <HiMiniArrowLongRight />
              </button>
            </div>
          </div>
          <div className="category-item div5">
            <img src={shoes} alt="Shoes" />
            <div className="overlay">
              <h1>SHOES</h1>
              <button>
                CHECK IT NOW <HiMiniArrowLongRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="info-banner">
        <div className="info-item">
          <FaGlobeAmericas size={40} />
          <div>
            <h3>Global Reach</h3>
            <p>Premium safety wear showcased across industries worldwide.</p>
          </div>
        </div>

        <div className="info-item">
          <PiPackageFill size={40} />
          <div>
            <h3>Fast Dispatch</h3>
            <p>Quick sample & catalog dispatch for evaluation needs.</p>
          </div>
        </div>

        <div className="info-item">
          <FaClipboardCheck size={40} />
          <div>
            <h3>Quality Assurance</h3>
            <p>Strict quality checks for optimal protection and durability.</p>
          </div>
        </div>

        <div className="info-item">
          <GrSecure size={40} />
          <div>
            <h3>Secure Experience</h3>
            <p>Safe inquiries and strict customer data protection.</p>
          </div>
        </div>
      </div>

      <div className="testimonial-section">
        <img
          src={testimonialbg}
          alt="Customer Testimonial"
          className="testimonial-image"
        />
        <div className="testimonial-content">
          <div>
            <h1>
              “LOVE THE KNEE PAD POCKETS, I KNEEL A LOT & RARELY WEAR OUT THE
              KNEES. LOVE THE POCKETS ON THE RIGHT OUTER THIGH...”
            </h1>
            <p className="testimonial-name">Aditya Gupta</p>
            <p className="testimonial-role">ONGC | Security Head</p>
          </div>
        </div>
      </div>

      <div className="store-banner">
        <img
          src={customsamplebg}
          alt="Get your custom-made sample"
          className="store-banner-image"
        />
        <div className="store-banner-section">
          <div className="store-banner-content">
            <h1>GET YOUR CUSTOM-MADE SAMPLE FAST</h1>
            <p>
              Experience premium quality with samples tailored to your needs.
              Available at 50+ locations Australia-wide.
            </p>
            <div className="store-banner-button">
              <Button text="DISCOVER NOW" variant="primary" link="/contact" />
            </div>
          </div>
        </div>
      </div>
      <div className="subscribe-section">
        <h1>SUBSCRIBE TO OUR MAILING LIST</h1>
        <p>
          You work hard, so we made this easy. Sign up for special perks
          starting now with a <strong>10% Off Coupon!</strong>
        </p>
        <div className="subscribe-input-wrapper">
          <input type="email" placeholder="Enter your email address" />
          <button type="submit">SUBSCRIBE</button>
        </div>
      </div>
    </>
  );
};

export default Home;
