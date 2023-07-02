import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const ItemCategories = () => {
  const [categories, setCategories] = useState([]);
  const Category = useLoaderData();
  console.log(Category);
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then((res) => res.json())
      .then((data) => setCategories(data.drinks));
  }, []);
  return (
    <>
      {categories.map((category) => (
        <Card className="col-4 flex-fill" key={category.strCategory} style={{ width: "18rem" }} as={Link} to={`/items/${category.strCategory}`}>
          <Card.Body>
            <Card.Title className="text-center">{category.strCategory}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default ItemCategories;
