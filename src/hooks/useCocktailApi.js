import { useEffect, useState } from "react";

const useCocktailApi = () => {
  const [cocktails, setCocktails] = useState([])
  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
      .then((res) => res.json())
      .then((data) => setCocktails(data.drinks));
  }, []);
  return cocktails;
};

export default useCocktailApi;