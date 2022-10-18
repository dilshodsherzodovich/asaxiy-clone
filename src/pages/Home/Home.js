import React from "react";
import Books from "../../components/Books/Books";
import Carousel from "../../components/Carousel/Carousel";
import Discount from "../../components/Discount/Discount";
import "./Home.scss";

function Home(props) {
  return (
    <div className="home container">
      <div className="daily">
        <Carousel />
        <Discount />
      </div>
      <div className="shop-section">
        <div className="container">
          <div className="left-side">
            <Books />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
