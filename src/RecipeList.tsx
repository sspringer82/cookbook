import React, { useEffect, useState } from 'react';
import RecipeListItem from './RecipeListItem';
import initRecipes from './recipes';
import { Recipe } from './types/Recipe';

function RecipeList(): React.ReactElement {
  const [headline] = useState<string>('Rezeptliste');

  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setRecipes(initRecipes);
    }, 1000);
  }, []);

  function handleDelete(id: number) {
    setRecipes((prevRecipes) => {
      return prevRecipes.filter((recipe) => recipe.id !== id);
    });
  }

  return (
    <div>
      <h1>{headline}</h1>
      {recipes.map((recipe) => (
        <RecipeListItem
          recipe={recipe}
          key={recipe.id}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default RecipeList;
