import React from "react";
import { useLoaderData } from "react-router-dom";
import Cocktail from "../Cocktail/Cocktail";

const Cocktails = () => {
  const items = useLoaderData();
  const cocktails = items.drinks;
  return (
    <div className="d-flex flex-column align-items-center my-5">
      <div className="mb-4">
        <h2>See The Cocktail Collections</h2>
      </div>
      <div className="row container">
        {cocktails.map((cocktail) => (
          <Cocktail key={cocktail.idDrink} cocktail={cocktail}></Cocktail>
        ))}
      </div>
    </div>
  );
};

export default Cocktails;
