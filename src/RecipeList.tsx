import React, { useState } from 'react';
import RecipeListItem from './RecipeListItem';
import initRecipes from './recipes';
import { Recipe } from './types/Recipe';

function RecipeList(): React.ReactElement {
  const [headline] = useState<string>('Rezeptliste');

  const [recipes] = useState<Recipe[]>(initRecipes);

  return (
    <div>
      <h1>{headline}</h1>
      {recipes.map((recipe) => (
        <RecipeListItem recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
}

export default RecipeList;
