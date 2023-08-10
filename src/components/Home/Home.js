import React from "react";
import { Fade } from "react-reveal";
import ItemCategory from "../ItemCategory/ItemCategory";
import ContactUs from "../contact us/ContactUs";
import Gallery from "../gallery/Gallery";
import Hero from "../hero/Hero";
import IconBox from "../iconbox/IconBox";
import Slider from "../slider/Slider";
import "./home.css";
const Home = () => {
  return (
    <div>
      <Hero/>
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
      <Gallery/>
    </div>
  );
};

export default Home;
