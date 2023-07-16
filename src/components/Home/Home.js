import React from "react";
import { Fade } from "react-reveal";
import solo from "../../images/h3-banner04.jpg";
import ItemCategory from "../ItemCategory/ItemCategory";
import Slider from "../slider/Slider";

const Home = () => {
  return (
    <div>
      <div className="hero d-block w-100" alt="hero">
        <div className="color-overlay d-flex flex-column justify-content-center align-items-start ps-5">
          <h2 className="fs-1">Welcom to Cocktail-DB</h2>
          <p className="fs-5">
            Search by Cocktail Category and get to know more about the
            ingreditensts
          </p>
        </div>
      </div>
      <Fade top distance="20%" duration={1500}>
        <div className="d-md-flex container justify-content-center flex-row-reverse align-items-center my-5">
          <img className="col-md-4 ml-2" src={solo} alt="" />
          <div className="col-md-6 mx-md-5 my-sm-2 my-5 text-md-start text-center ">
            <h2 className="my-md-4">
              Unleash Your Inner Bartender with Our Cocktail Library
            </h2>
            <p>
              Elevate your bartending skills with our ReactJS app! Explore a
              vast collection of cocktails, discover new flavors, and impress
              your guests with exciting recipes. Cheers to unforgettable
              experiences!
            </p>
          </div>
        </div>
        <ItemCategory />
        <Slider />
      </Fade>
    </div>
  );
};

export default Home;
