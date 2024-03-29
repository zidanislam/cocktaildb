import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";
import "./item-category.css";

const ItemCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then((res) => res.json())
      .then((data) => setCategories(data.drinks));
  }, []);
  const textCategories = categories.map((category)=>encodeURIComponent(category.strCategory))
  return (
    <div className="my-5">
    
    <h2 className="text-center mt-4">Categories</h2>
    <Fade top distance='20%' duration={1500}>
    <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
      {textCategories.map((category) =>(
        <Card className="category" key={category} style={{ width: "18rem"}} as={Link} to={`/items/${category}`}>
          <Card.Body>
            <Card.Title className="text-center">{decodeURIComponent(category)}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
    </Fade>
    </div>

  );
};

export default ItemCategories;
