import React, { useState } from "react";
import useCocktailApi from "../../hooks/useCocktailApi";
import Cocktail from "../Cocktail/Cocktail";
import Pagination1 from "../pagination/Pagination1";

const Cocktails = () => {
  const cocktailApi = useCocktailApi();
  const [currentPage, setCurrentPage] = useState(1);
  const [postInPage, setPostInPage] = useState(8);

  //set post limit
  const lastPostIndex = currentPage * postInPage;
  const firstPostIndex = lastPostIndex - postInPage;
  const currentPost = cocktailApi.slice(firstPostIndex, lastPostIndex);
  console.log(cocktailApi.length);

  //set pagination

  return (
    <>
      <div className="d-flex flex-column align-items-center py-5">
        <div className="mb-4">
          <h2>See The Cocktail Collections</h2>
        </div>
        <div className="row container">
          {currentPost.map((cocktail) => (
            <Cocktail key={cocktail.idDrink} cocktail={cocktail}></Cocktail>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center mb-4">
      <Pagination1
        totalPost={cocktailApi.length}
        postInPage={postInPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      </div>
    </>
  );
};

export default Cocktails;
