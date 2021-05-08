import React from "react";
import Button from "../../Components/Button";
import bannerImage from "./bannerImage.svg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="banner-container">
        <div className="banner-content">
          <div className="banner-heading">
            Your one stop <strong>healthy &amp; organic</strong> online store
          </div>
          <div className="banner-data">
            From local products to fresh produce, our expert team members will
            help you with the groceries you know and love.
          </div>
          <Button link={"/category"} text={"Explore the range"} width={200} />
        </div>
        <div className="banner-img">
          <img src={bannerImage} alt="Banner" />
        </div>
      </div>
    </div>
  );
}
export default Home;
