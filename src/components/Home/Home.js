import React from "react";
import { Fade } from "react-reveal";
import ItemCategory from "../ItemCategory/ItemCategory";
import ContactUs from "../contact us/ContactUs";
import IconBox from "../iconbox/IconBox";
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
      <IconBox />
      <Fade top distance="20%" duration={1500}>
        <Slider />
        <div className="container my-5">
          <div className="row">
            <img
              className="col-md-5 ml-md-5 order-md-2"
              src="https://i.ibb.co/Sr5V6gC/video-banner-01-1.png"
              alt=""
            />
            <div className="col-md-7 my-md-auto order-md-1">
              <h2 className="">
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
        </div>
        <ItemCategory />
      </Fade>
      <ContactUs />
    </div>
  );
};

export default Home;
