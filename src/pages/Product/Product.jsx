import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FiPhoneCall, FiHeart, FiShare2 } from "react-icons/fi";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import "./style.css";

const Product = () => {
  const { product: productId } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [activeTab, setActiveTab] = useState("description");
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    fetch("/shop-data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.products.find(
          (p) => p.id === parseInt(productId)
        );
        if (foundProduct) {
          setProduct(foundProduct);
          setMainImage(foundProduct.image1);
        } else {
          console.error("Product not found");
        }
      })
      .catch((err) => console.error("Failed to fetch product data", err));
  }, [productId]); // Refetch when ID changes

  if (!product) return <div>Loading...</div>;

  const productImages = [
    product.image1,
    product.image2,
    product.image3,
    product.image4,
    product.image5,
    product.image6,
  ]
    .filter(Boolean)
    .map((img) => img);

  const handleThumbnailClick = (image) => setMainImage(image);
  const toggleWishlist = () => setIsWishlisted(!isWishlisted);

  return (
    <div className="product-page">
      <nav className="breadcrumb">
        <span>HOMEPAGE / PRODUCT / {product.name.toUpperCase()}</span>
      </nav>

      <div className="product-container">
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

        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <div className="product-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) =>
                i < product.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
              )}
            </div>
            <span className="review-count">(24)</span>
          </div>
          <div className="product-description">
            <p>{product.description1}</p>
            <ul className="features-list">
              {product.bullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="action-buttons">
            <button className="add-to-cart-btn">
              <FiPhoneCall className="btn-icon" />
              Quick Quote
            </button>
            <button className="product-contact-btn">Contact</button>
          </div>
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

        {activeTab === "description" && (
          <div className="product-content">
            <div className="left-section">
              <h1 className="title">{product.name}</h1>
              <div className="rating">
                {[...Array(5)].map((_, i) =>
                  i < product.rating ? (
                    <FaStar key={i} />
                  ) : (
                    <FaRegStar key={i} />
                  )
                )}
                <span className="review-count">(24 reviews)</span>
              </div>
              <p className="description">{product.description2}</p>
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
                src={mainImage}
                alt={product.name}
                className="product-image"
              />
            </div>
          </div>
        )}

        {activeTab === "additional" && (
          <div className="additional-info">
            <div className="info-section">
              <h3>MATERIALS & CARE</h3>
              <ul>
                {product.materialCare.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="info-section">
              <h3>DIMENSIONS</h3>
              <ul>
                {product.dimensions.map((dim, i) => (
                  <li key={i}>{dim}</li>
                ))}
              </ul>
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
  );
};

export default Product;
