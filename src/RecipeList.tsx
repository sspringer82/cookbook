import React, { useState } from 'react';
import RecipeListItem from './RecipeListItem';
import initRecipes from './recipes';
import { Recipe } from './types/Recipe';

function RecipeList(): React.ReactElement {
  const [headline, setHeadline] = useState<string>('Rezeptliste');

  const [recipes, setRecipes] = useState<Recipe[]>([]);

  setTimeout(() => {
    console.log('Headline wird geändert');
    setHeadline((prevHeadline) => {
      return 'Mein Kochbuch!';
    });
    setRecipes(initRecipes);
  }, 1000);

  return (
    <div>
      <h1>{headline}</h1>
      {recipes.map((recipe) => (
        <div>{recipe.title}</div>
      ))}
      <RecipeListItem />
    </div>
  );
}

export default RecipeList;
