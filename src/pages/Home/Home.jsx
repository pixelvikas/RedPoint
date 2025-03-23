import React from "react";
import "./style.css";
import Button from "../../components/Button";
import { FaStar } from "react-icons/fa";
import product1 from "../../assets/product1.png";

import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";
import client4 from "../../assets/client4.png";
import client5 from "../../assets/client5.png";
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
      image: product1,
      name: "HI-VIS SURVEYOR’S VEST",
      rating: 4,
    },
    {
      image: product1,
      name: "HARD HAT TYPE-II",
      rating: 5,
    },
    {
      image: product1,
      name: "HI-PRO GOGGLES",
      rating: 3,
    },
    {
      image: product1,
      name: "HI-PRO GOGGLES",
      rating: 4,
    },
  ];
  return (
    <>
      <div className="hero-content">
        <div className="homepage" id="home">
          <h1>
            BUILT FOR PROTECTION,
            <br />
            DRIVEN BY SAFETY,
            <br />
            CRAFTED WITH EXCELLENCE.
          </h1>
          <div className="hero-buttons">
            <Button text="Explore" variant="primary" link="/shop" />
            <Button
              text="Contact"
              variant="secondary"
              link="/contact"
              showIcon={true}
            />
          </div>
        </div>
      </div>
      <div className="bestseller-section">
        <div className="bestseller-header">
          <span>BEST SELLER</span>
        </div>
        <div className="bestseller-products">
          {products.map((item, index) => (
            <div className="product-card" key={index}>
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <div className="stars">
                {Array(item.rating)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} color="#f7c948" />
                  ))}
              </div>
              <div className="view-button">View</div>
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
    </>
  );
};

export default Home;
