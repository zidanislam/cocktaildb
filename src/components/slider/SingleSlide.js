import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleSlide = (cocktail) => {
  const { idDrink, strDrink, strDrinkThumb} =
    cocktail.cocktail;
  return (
      <div className="product text-center m-auto" style={{ width: "17rem" }}>
      <img
          className="p-2 rounded-4"
          width="90%"
          height="100%"
          variant="top"
          alt=""
          src={strDrinkThumb}
        />
        <div>
          <h6>{strDrink}</h6>
          <p>
            <small>Id: {idDrink}</small>
          </p>
          <Button className="fs-5 button position-relative category" as={Link} to={`/item/${idDrink}`}>
            See Recipe
          </Button>
      </div>
      </div>
  );
};

export default SingleSlide;
