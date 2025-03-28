import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaStar, FaRegStar } from "react-icons/fa";
import shopherobg from "../../assets/bc-shop.jpg";
import product1 from "../../assets/product1.png";

import "./style.css";

const Shop = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategories = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handleCategoryToggle = (categoryName) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((cat) => cat !== categoryName)
        : [...prev, categoryName]
    );
  };

  const categories = [
    { name: "Trousers", count: 15 },
    { name: "Jackets", count: 2 },
    { name: "Accessories", count: 7 },
    { name: "Suits", count: 17 },
    { name: "Shoes", count: 2 },
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

  const filteredProducts =
    selectedCategories.length > 0
      ? products.filter((product) =>
          selectedCategories.includes(product.category)
        )
      : products;

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

  return (
    <div className="shop-page">
      {/* Hero Section */}
      <div className="shop-hero">
        <img
          src={shopherobg}
          alt="Products"
          className="hero-image"
          loading="lazy"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="breadcrumb">HOME / PRODUCTS</p>
          <h1 className="hero-title">PRODUCTS</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="shop-main">
        {/* Sidebar */}
        <aside className="shop-sidebar">
          <div className="filter-card">
            <div className="filter-header" onClick={toggleCategories}>
              <h3>PRODUCT CATEGORIES</h3>
              {isCategoryOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            {isCategoryOpen && (
              <ul className="filter-list">
                {categories.map((category) => (
                  <li key={category.name}>
                    <label className="filter-item">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category.name)}
                        onChange={() => handleCategoryToggle(category.name)}
                      />
                      <span className="filter-label">{category.name}</span>
                    </label>
                    <span className="filter-count">({category.count})</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>

        {/* Products Section */}
        <main className="shop-products">
          <div className="section-header">
            <h2 className="section-title">PRODUCTS</h2>
            {selectedCategories.length > 0 && (
              <div className="active-filters">
                Filtered by: {selectedCategories.join(", ")}
                <button
                  onClick={() => setSelectedCategories([])}
                  className="clear-filters"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>

          <div className="products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div className="product-card" key={product.id}>
                  <div className="product-image-container">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="product-details">
                    <h3 className="product-title">{product.name}</h3>
                    <div className="product-rating">
                      <div className="stars">
                        {renderStars(product.rating)}
                        <span className="rating-value">({product.rating})</span>
                      </div>
                    </div>
                    <div className="product-price">
                      ${product.price.toFixed(2)}
                    </div>
                    <button className="add-to-cart">View Details</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-products">
                <p>No products match your filters.</p>
                <button
                  onClick={() => setSelectedCategories([])}
                  className="reset-filters"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Shop;
