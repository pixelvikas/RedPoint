import React from "react";
import "./style.css";
import Button from "../../components/Button";

const Home = () => {
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
      
    </>
  );
};

export default Home;
