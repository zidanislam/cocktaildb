import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { useLoaderData } from "react-router-dom";
import Cocktail from "../Cocktail/Cocktail";
import Pagination1 from "../pagination/Pagination1";

const Cocktails = () => {
  const category = useLoaderData();
  const items = category.drinks;
  const [currentPage, setCurrentPage] = useState(1);
  const [postInPage, setPostInPage] = useState(16);
  //set post limit
  const lastPostIndex = currentPage * postInPage;
  const firstPostIndex = lastPostIndex - postInPage;
  const currentPost = items.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <Fade top distance='20%' duration={1500}>
        <div className="d-flex flex-column align-items-center py-5">
          <div className="mb-4">
            <h2></h2>
          </div>
          <div className="row container">
            {currentPost.map((cocktail) => (
              <Cocktail key={cocktail.idDrink} cocktail={cocktail}></Cocktail>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-center mb-4">
          <Pagination1
            totalPost={items.length}
            postInPage={postInPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </Fade>
    </>
  );
};

export default Cocktails;
