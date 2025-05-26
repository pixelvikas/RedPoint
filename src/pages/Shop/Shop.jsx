import { useState, useEffect } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaFilter,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { BiSolidOffer } from "react-icons/bi";
import { BsFillGridFill, BsList } from "react-icons/bs";
import shopherobg from "../../assets/bc-shop.jpg";
import "./style.css";

const Shop = () => {
  const navigate = useNavigate();

  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/shop-data.json");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();

        const categoryCounts = data.products.reduce((acc, product) => {
          acc[product.category] = (acc[product.category] || 0) + 1;
          return acc;
        }, {});

        const processedCategories = data.categories.map((cat) => ({
          ...cat,
          count: categoryCounts[cat.name] || 0,
        }));

        setCategories(processedCategories);
        setProducts(data.products);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.category)) &&
      (searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const toggleCategories = () => setIsCategoryOpen(!isCategoryOpen);
  const toggleMobileFilters = () => setMobileFiltersOpen(!mobileFiltersOpen);

  const handleCategoryToggle = (categoryName) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((cat) => cat !== categoryName)
        : [...prev, categoryName]
    );
    setCurrentPage(1);
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSearchQuery("");
    setCurrentPage(1);
  };

  if (loading)
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading products...</p>
      </div>
    );

  if (error)
    return (
      <div className="error-container">
        <h3>Error loading products</h3>
        <p>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="retry-button"
        >
          Retry
        </button>
      </div>
    );

  const handleViewDetails = (link) => {
    navigate(`/${link}`);
  };

  return (
    <div className="shop-page">
      <div className="shop-hero">
        <img src={shopherobg} alt="Shop" className="shop-hero-image" />
        <div className="shop-hero-overlay"></div>
        <div className="shop-hero-content">
          <div className="breadcrumb">
            <span>HOME / PRODUCTS</span>
          </div>
          <h1>OUR PRODUCTS</h1>
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
            {searchQuery && (
              <FaTimes
                className="clear-search"
                onClick={() => setSearchQuery("")}
              />
            )}
          </div>
        </div>
      </div>

      <button className="mobile-filter-toggle" onClick={toggleMobileFilters}>
        <FaFilter /> Filters
      </button>

      <div className="shop-main">
        <aside className={`shop-sidebar ${mobileFiltersOpen ? "open" : ""}`}>
          <div className="sidebar-header">
            <h3>FILTERS</h3>
            <button className="close-sidebar" onClick={toggleMobileFilters}>
              <FaTimes />
            </button>
          </div>

          <div className="filter-card">
            <div className="filter-header" onClick={toggleCategories}>
              <h3>CATEGORIES</h3>
              {isCategoryOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>

            {isCategoryOpen && (
              <ul className="filter-list">
                {categories.map((category) => {
                  const id = `cat-${category.name}`;
                  return (
                    <li key={category.name}>
                      <label className="filter-item" htmlFor={id}>
                        <input
                          id={id}
                          type="checkbox"
                          checked={selectedCategories.includes(category.name)}
                          onChange={() => handleCategoryToggle(category.name)}
                        />
                        <span className="filter-label">{category.name}</span>
                      </label>
                      <span className="filter-count">({category.count})</span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {(selectedCategories.length > 0 || searchQuery) && (
            <button onClick={clearAllFilters} className="clear-filters-btn">
              Clear All Filters
            </button>
          )}
        </aside>

        <main className="shop-products">
          <div className="products-header">
            <div className="results-info">
              <p>
                Showing {indexOfFirstProduct + 1}-
                {Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
                {filteredProducts.length} products
              </p>
              {selectedCategories.length > 0 && (
                <div className="active-filters">
                  {selectedCategories.map((category) => (
                    <span key={category} className="filter-tag">
                      {category}
                      <button onClick={() => handleCategoryToggle(category)}>
                        <FaTimes />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="controls">
              <div className="view-toggle">
                <button
                  className={viewMode === "grid" ? "active" : ""}
                  onClick={() => setViewMode("grid")}
                >
                  <BsFillGridFill />
                </button>
                <button
                  className={viewMode === "list" ? "active" : ""}
                  onClick={() => setViewMode("list")}
                >
                  <BsList />
                </button>
              </div>
            </div>
          </div>

          <div className={`products-container ${viewMode}`}>
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <div className="product-card" key={product.id}>
                  <div className="product-badges">
                    {product.isNew && <span className="badge new">NEW</span>}
                    {product.isOnSale && (
                      <span className="badge sale">
                        <BiSolidOffer /> SALE
                      </span>
                    )}
                  </div>
                  <div className="product-image-container">
                    <img
                      src={product.image1}
                      alt={product.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="product-details">
                    <h3 className="product-title">{product.name}</h3>
                    <div className="product-actions">
                      <Link to={`/products/${product.id}`}>
                        <button className="view-details">View Details</button>
                      </Link>
                    </div>
                    {viewMode === "list" && (
                      <p className="product-description">
                        {product.shortDescription}
                      </p>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="no-products">
                <h3>No products found</h3>
                <p>Try adjusting your search or filter criteria</p>
                <button onClick={clearAllFilters} className="reset-filters">
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={currentPage === page ? "active" : ""}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Shop;
