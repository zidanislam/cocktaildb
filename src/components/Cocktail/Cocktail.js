import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Cocktail.css";

const Cocktail = (cocktail) => {
  const { idDrink, strDrink, strDrinkThumb, strInstructions } = cocktail.cocktail;
  
  return (
    <div className="col-sm-6 col-md-4 col-xl-3 gy-3 d-flex justify-content-center">
      <Card className="shadow-sm product" style={{ width: "17rem" }}>
        <Card.Img
          className="p-2 rounded-4 rounded-bottom-0"
          variant="top"
          src={strDrinkThumb}
        />
        <Card.Body>
          <Card.Title>{strDrink}</Card.Title>
          <Card.Text>{strInstructions.substring(0, 50)}</Card.Text>
          <Button className=" button" as={Link} to={`/item/${idDrink}`}>See Full Recepe</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cocktail;
