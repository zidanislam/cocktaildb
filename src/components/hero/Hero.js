import React from "react";
import { Carousel } from "react-bootstrap";
import "./hero.css";

const Hero = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          src="https://i.ibb.co/6nrJbhg/hero-3.jpg"
          className="img"
          alt="img"
        />
        <Carousel.Caption className="position-absolute cap slide1">
          <h2 className="fs-md-1">Wellcom to Cocktail-DB</h2>
          <p className="fs-md-5">
            where the world of mixology awaits you. With a vast collection of
            cocktails at your disposal.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://i.ibb.co/GnbMtwB/hero-1.jpg"
          className="img"
          alt="img"
        />
        <Carousel.Caption className="position-absolute cap">
          <h2 className="fs-md-1">Browse By Categories</h2>
          <p className="fs-md-5">
            You can dive into a universe of flavors and explore the
            possibilities of drink-making.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://i.ibb.co/Nrhyy4H/hero-2.jpg"
          className="img"
          alt="img"
        />
        <Carousel.Caption className="position-absolute cap slide3">
          <h2 className="fs-md-1">Unleash Your Inner Bartender</h2>
          <p className="fs-md-5">
            Unleash your creativity and become the bartender you've always
            wanted to be with our ReactJS-powered web app.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
