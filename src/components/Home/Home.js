import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div >
          <div
            className="hero d-block w-100"
            alt="hero">
          <div className="color-overlay d-flex flex-column justify-content-center align-items-start ps-5">
            <h2 className="fs-1">Welcom to Cocktail-DB</h2>
            <p className="fs-5">Search by Cocktail Name and get to know more about the ingreditensts</p>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Home;