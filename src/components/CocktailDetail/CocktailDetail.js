import React from "react";
import { useLoaderData } from "react-router-dom";

const CocktailDetail = () => {
  const detail = useLoaderData();
  const {
    strDrink,
    strDrinkThumb,
    strCategory,
    strGlass,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strInstructions,
  } = detail.drinks[0];
  return (
    <div className="d-md-flex container justify-content-around p-5">
        <img src={strDrinkThumb} className="img-fluid col-md-4" alt="" />
      <div className="px-md-5 col-md-8 py-4">
        <h2>{strDrink}</h2>
        <p>Category:{strCategory}</p>
        <p>
          Items:{strIngredient1}, {strIngredient2}, {strIngredient3},{strGlass}
        </p>
        <p>Description: {strInstructions}</p>
      </div>
    </div>
  );
};

export default CocktailDetail;
