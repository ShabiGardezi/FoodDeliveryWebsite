import React from "react";
import BannerImage from "./assests/banner.jpeg";
import { Link } from "react-router-dom";
import "./styles/Home.css";
function Home(params) {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="container">
        <h1 className="home-heading">Pedro's Pizzeria</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button className="btn btn-primary">Order Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
