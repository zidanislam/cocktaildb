import React, { useEffect, useState } from "react";
import CocktailList from "../CocktailList/CocktailList";

const Cocktails = () => {
  const [cocktails, setCocktails] = useState([]);
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => setCocktails(data.drinks));
  }, []);
  console.log("cocktails",cocktails)
  return (
    <div>
      <CocktailList cocktails={cocktails}/>
      
    </div>
  );
};

export default Cocktails;
