import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Cocktail.css";

const Cocktail = (cocktail) => {
  const { idDrink, strDrink, strDrinkThumb } = cocktail.cocktail;
  console.log(idDrink)

  return (
    <div className="container col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 text-center gy-3">
      <div className="product  mx-auto" style={{ width: "17rem" }}>
        <img
          className="p-2 rounded-4"
          width="100%"
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
    </div>
  );
};

export default Cocktail;
