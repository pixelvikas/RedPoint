import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FiPhoneCall, FiHeart, FiShare2 } from "react-icons/fi";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import Modal from "react-modal";
import "./style.css";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const Product = () => {
  const { product: productId } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [activeTab, setActiveTab] = useState("description");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showQuickQuote, setShowQuickQuote] = useState(false);
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const [quickQuoteForm, setQuickQuoteForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [questionForm, setQuestionForm] = useState({
    name: "",
    email: "",
    question: "",
  });
  const navigate = useNavigate();

  // Check if product is in wishlist on component mount
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setIsWishlisted(wishlist.includes(parseInt(productId)));
  }, [productId]);

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
  }, [productId]);

  if (!product) return <div className="loading">Loading...</div>;

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

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const productIdNum = parseInt(productId);

    if (isWishlisted) {
      const updatedWishlist = wishlist.filter((id) => id !== productIdNum);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    } else {
      const updatedWishlist = [...wishlist, productIdNum];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    }

    setIsWishlisted(!isWishlisted);
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleShareClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: product.name,
          text: `Check out this product: ${product.name}`,
          url: window.location.href,
        })
        .catch((error) => console.log("Error sharing:", error));
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => alert("Link copied to clipboard!"))
        .catch((err) => {
          console.error("Failed to copy: ", err);
          // Fallback to old-school method
          const textArea = document.createElement("textarea");
          textArea.value = window.location.href;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand("copy");
          document.body.removeChild(textArea);
          alert("Link copied to clipboard!");
        });
    }
  };

  const handleQuickQuoteSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Quick quote submitted:", quickQuoteForm);
    alert("Thank you for your inquiry! We'll contact you shortly.");
    setShowQuickQuote(false);
    setQuickQuoteForm({ name: "", email: "", phone: "", message: "" });
  };

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Question submitted:", questionForm);
    alert("Thank you for your question! We'll get back to you soon.");
    setShowQuestionForm(false);
    setQuestionForm({ name: "", email: "", question: "" });
  };

  const handleInputChange = (e, formType) => {
    const { name, value } = e.target;
    if (formType === "quickQuote") {
      setQuickQuoteForm((prev) => ({ ...prev, [name]: value }));
    } else {
      setQuestionForm((prev) => ({ ...prev, [name]: value }));
    }
  };

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
            <button
              className="add-to-cart-btn"
              onClick={() => setShowQuickQuote(true)}
            >
              <FiPhoneCall className="btn-icon" />
              Quick Quote
            </button>
            <button
              className="product-contact-btn"
              onClick={handleContactClick}
            >
              Contact
            </button>
          </div>
          <div className="additional-actions">
            <button
              className="action-link"
              onClick={() => setShowQuestionForm(true)}
            >
              <MdOutlineQuestionAnswer className="action-icon" />
              Ask a Question
            </button>
            <a href="/fitguide.png">
              <button className="action-link">
                <TfiRulerAlt2 className="action-icon" />
                Size Guide
              </button>
            </a>
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
                <button className="share-btn" onClick={handleShareClick}>
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

      {/* Quick Quote Modal */}
      <Modal
        isOpen={showQuickQuote}
        onRequestClose={() => setShowQuickQuote(false)}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <h2>Quick Quote Request</h2>
          <p>
            Fill out the form below and we'll get back to you with pricing
            information.
          </p>

          <form onSubmit={handleQuickQuoteSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={quickQuoteForm.name}
                onChange={(e) => handleInputChange(e, "quickQuote")}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={quickQuoteForm.email}
                onChange={(e) => handleInputChange(e, "quickQuote")}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={quickQuoteForm.phone}
                onChange={(e) => handleInputChange(e, "quickQuote")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={quickQuoteForm.message}
                onChange={(e) => handleInputChange(e, "quickQuote")}
                rows="4"
              />
            </div>

            <div className="form-actions">
              <button type="button" onClick={() => setShowQuickQuote(false)}>
                Cancel
              </button>
              <button type="submit" className="submit-btn">
                Request Quote
              </button>
            </div>
          </form>
        </div>
      </Modal>

      {/* Ask a Question Modal */}
      <Modal
        isOpen={showQuestionForm}
        onRequestClose={() => setShowQuestionForm(false)}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <h2>Ask a Question</h2>
          <p>Have a question about this product? We're happy to help!</p>

          <form onSubmit={handleQuestionSubmit}>
            <div className="form-group">
              <label htmlFor="question-name">Name</label>
              <input
                type="text"
                id="question-name"
                name="name"
                value={questionForm.name}
                onChange={(e) => handleInputChange(e, "question")}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="question-email">Email</label>
              <input
                type="email"
                id="question-email"
                name="email"
                value={questionForm.email}
                onChange={(e) => handleInputChange(e, "question")}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="question-text">Your Question</label>
              <textarea
                id="question-text"
                name="question"
                value={questionForm.question}
                onChange={(e) => handleInputChange(e, "question")}
                rows="4"
                required
              />
            </div>

            <div className="form-actions">
              <button type="button" onClick={() => setShowQuestionForm(false)}>
                Cancel
              </button>
              <button type="submit" className="submit-btn">
                Submit Question
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Product;
