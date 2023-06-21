import React from "react";
import Cocktails from "../Cocktails/Cocktails";
import "./Home.css";

const Home = () => {
  return (
    <div className="body">
      <div>
        <div className="hero d-block w-100" alt="hero">
          <div className="color-overlay d-flex flex-column justify-content-center align-items-start ps-5">
            <h2 className="fs-1">Welcom to Cocktail-DB</h2>
            <p className="fs-5">
              Search by Cocktail Name and get to know more about the
              ingreditensts
            </p>
          </div>
        </div>
      </div>
      <Cocktails></Cocktails>
    </div>
  );
};

export default Home;
