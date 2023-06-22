import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CocktailDetail = () => {
    const detail = useLoaderData();
    const {strDrink} = detail.drinks[0];
    console.log(strDrink)  
    return (
        <div>
            <h2>This Product name is {strDrink}</h2>
        </div>
    );
};

export default CocktailDetail;