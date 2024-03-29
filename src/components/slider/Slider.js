import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useCocktailApi from "../../hooks/useCocktailApi";
import SingleSlide from "./SingleSlide";

const Slider = () => {
  const cocktailApi = useCocktailApi();
  const [currentPage, setCurrentPage] = useState(1);
  const [postInPage, setPostInPage] = useState(8);

  //set post limit
  const lastPostIndex = currentPage * postInPage;
  const firstPostIndex = lastPostIndex - postInPage;
  const currentPost = cocktailApi.slice(firstPostIndex, lastPostIndex);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 2560, min: 1441 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1025 },
      items: 5,
    },
    laptop: {
      breakpoint: { max: 1024, min: 769 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 426 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel responsive={responsive}
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className="my-5"
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}>
        {currentPost.map((cocktail) => (
          <SingleSlide key={cocktail.idDrink} cocktail={cocktail} />
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
