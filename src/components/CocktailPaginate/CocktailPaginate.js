import React from 'react';
import Cocktail from '../Cocktail/Cocktail';

const CocktailPaginate = ({cocktails}) => {
    return (
        <div className="d-flex flex-column align-items-center py-5">
            <div className="mb-4">
        <h2>See The Cocktail Collections</h2>
      </div>
      <div className="row container">
      {cocktails.map(cocktail=><Cocktail key={cocktail.idDrink} cocktail={cocktail}></Cocktail>)}
      </div>
        </div>
    );
};

export default CocktailPaginate;