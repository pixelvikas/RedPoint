import React, { useState } from "react";
import Product1 from "../../assets/producta1.png";
import Product2 from "../../assets/producta2.png";
import Product3 from "../../assets/producta3.png";
import Product4 from "../../assets/producta4.png";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FiPhoneCall, FiHeart, FiShare2 } from "react-icons/fi";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import pd from "../../assets/pd.jpg";

import "./style.css";

const Product = () => {
  const [mainImage, setMainImage] = useState(Product1);

  const productImages = [Product1, Product2, Product3, Product4];

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [isWishlisted, setIsWishlisted] = useState(false);

  const sizes = ["XS", "S", "M", "L", "XL"];
  const reviews = [
    { id: 1, author: "John D.", rating: 5, comment: "Excellent quality!" },
    { id: 2, author: "Sarah M.", rating: 4, comment: "Beautiful painting" },
  ];

  const handleQuantityChange = (value) => {
    if (value >= 1 && value <= 10) setQuantity(value);
  };
  const toggleWishlist = () => setIsWishlisted(!isWishlisted);
  return (
    <div className="product-page">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <span>HOMEPAGE / PRODUCT / PIRATE PANT STRETCH</span>
      </nav>

      {/* Product Display Section */}
      <div className="product-container">
        {/* Left Section - Product Images */}
        <div className="product-gallery">
          <div className="thumbnail-images">
            {productImages.map((image, index) => (
              <div
                key={index}
                className={`thumbnail ${mainImage === image ? "active" : ""}`}
                onClick={() => handleThumbnailClick(image)}
              >
                <img src={image} alt={`Product Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="main-image-container">
            <img src={mainImage} alt="Main Product" className="main-image" />
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="product-info">
          <h1 className="product-title">PIRATE PANT STRETCH</h1>

          {/* Star Ratings */}
          <div className="product-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) =>
                i < 4 ? <FaStar key={i} /> : <FaRegStar key={i} />
              )}
            </div>
            <span className="review-count">(24)</span>
          </div>

          {/* Price */}

          {/* Product Description */}
          <div className="product-description">
            <p>
              Premium stretch pirate pants designed for comfort and style. Made
              with high-quality breathable fabric that ensures all-day comfort.
              Perfect for casual outings and adventurous activities alike.
            </p>
            <ul className="features-list">
              <li>100% Cotton with stretch technology</li>
              <li>Reinforced stitching for durability</li>
              <li>Adjustable waistband</li>
              <li>Multiple pocket options</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="add-to-cart-btn">
              <FiPhoneCall className="btn-icon" />
              Quick Quote
            </button>
            <button className="product-contact-btn">Contact</button>
          </div>

          {/* Additional Actions */}
          <div className="additional-actions">
            <button className="action-link">
              <MdOutlineQuestionAnswer className="action-icon" />
              Ask a Question
            </button>
            <button className="action-link">
              <TfiRulerAlt2 className="action-icon" />
              Size Guide
            </button>
          </div>
        </div>
      </div>
      <div className="product-details-container">
        <div className="product-details-container">
          {/* Tab Navigation */}
          <div className="tabs">
            <button
              className={`tab ${activeTab === "description" ? "active" : ""}`}
              onClick={() => setActiveTab("description")}
            >
              DESCRIPTION
            </button>
            <button
              className={`tab ${activeTab === "additional" ? "active" : ""}`}
              onClick={() => setActiveTab("additional")}
            >
              DETAILS
            </button>
          </div>

          {/* Product Description Section */}
          {activeTab === "description" && (
            <div className="product-content">
              <div className="left-section">
                <h1 className="title">HANDCRAFTED PAINTING</h1>
                <div className="rating">
                  {[...Array(5)].map((_, i) =>
                    i < 4 ? <FaStar key={i} /> : <FaRegStar key={i} />
                  )}
                  <span className="review-count">(24 reviews)</span>
                </div>
                <p className="description">
                  Each handcrafted painting in our collection is a unique
                  masterpiece created using traditional techniques with premium
                  quality materials. Our artists spend countless hours
                  perfecting every detail to bring you exceptional artwork that
                  tells a story.
                </p>
                <div className="action-buttons">
                  <button className="wishlist-btn" onClick={toggleWishlist}>
                    <FiHeart className={isWishlisted ? "filled" : ""} />
                    {isWishlisted ? "WISHLISTED" : "ADD TO WISHLIST"}
                  </button>
                  <button className="share-btn">
                    <FiShare2 />
                    SHARE
                  </button>
                </div>
              </div>
              <div className="right-section">
                <img
                  src={Product1}
                  alt="Handcrafted Painting"
                  className="product-image"
                />
              </div>
            </div>
          )}

          {/* Additional Information Section */}
          {activeTab === "additional" && (
            <div className="additional-info">
              <div className="info-section">
                <h3>MATERIALS & CARE</h3>
                <ul>
                  <li>Premium artist-grade canvas</li>
                  <li>Oil and acrylic paints</li>
                  <li>Hand-stretched wooden frame</li>
                  <li>Protective varnish coating</li>
                </ul>
              </div>
              <div className="info-section">
                <h3>DIMENSIONS</h3>
                <p>24" × 36" (61 × 91 cm)</p>
                <p>Depth: 1.5" (3.8 cm)</p>
              </div>
              <div className="info-section">
                <h3>SHIPPING & RETURNS</h3>
                <p>Free worldwide shipping</p>
                <p>30-day return policy</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
