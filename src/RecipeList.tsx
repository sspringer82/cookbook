import React from 'react';
import RecipeListItem from './RecipeListItem';

function RecipeList(): React.ReactElement {
  const headline = 'Rezeptliste';

  const recipes = ['Schnitzel', 'Pizza'];

  return (
    <div>
      <h1>{headline}</h1>
      {recipes.map((recipe) => (
        <div>{recipe}</div>
      ))}
      <RecipeListItem />
    </div>
  );
}

export default RecipeList;
