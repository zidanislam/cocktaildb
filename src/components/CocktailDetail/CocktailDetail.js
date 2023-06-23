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
    <div className="d-flex justify-content-evenly p-5">
      <div>
        <img src={strDrinkThumb} className="w-75" alt="" />
      </div>
      <div>
        <h2>{strDrink}</h2>
        <p>Category:{strCategory}</p>
        <p>
          Items:{strIngredient1}, {strIngredient2}, {strIngredient3},{strGlass}
        </p>
        <p>Descreaption: {strInstructions}</p>
      </div>
    </div>
  );
};

export default CocktailDetail;
