import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp, FaStar, FaRegStar } from "react-icons/fa";
import shopherobg from "../../assets/bc-shop.jpg";
import "./style.css";

const Shop = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/shop-data.json");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();

        setCategories(data.categories);
        setProducts(data.products);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleCategories = () => setIsCategoryOpen(!isCategoryOpen);

  const handleCategoryToggle = (categoryName) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((cat) => cat !== categoryName)
        : [...prev, categoryName]
    );
  };

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

  if (loading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="shop-page">
      <div className="about-page-hero">
        <img
          src={shopherobg}
          alt="About Us"
          className="about-page-hero-image"
        />
        <div className="about-page-overlay"></div>
        <div className="about-page-hero-text">
          <p>HOME / PRODUCTS</p>
          <h1>PRODUCTS</h1>
        </div>
      </div>

      <div className="shop-main">
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

          <div className="shop-products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <a href={product.link} key={product.id}>
                  <div className="product-card">
                    <div className="product-image-container">
                      <img src={product.image1} alt={product.name} />
                    </div>
                    <div className="product-details">
                      <h3 className="product-title">{product.name}</h3>
                      <div className="product-rating">
                        <div className="stars">
                          {renderStars(product.rating)}
                          <span className="rating-value">
                            ({product.rating})
                          </span>
                        </div>
                      </div>
                      <button className="add-to-cart">View Details</button>
                    </div>
                  </div>
                </a>
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
