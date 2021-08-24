import React, { useState } from 'react';
import RecipeListItem from './RecipeListItem';

import './RecipeList.css';
import useRecipe from './useRecipe';
import RecipeForm from './RecipeForm';

function RecipeList(): React.ReactElement {
  const [headline] = useState<string>('Rezeptliste');

  const { recipes, handleDelete, handleSave } = useRecipe();

  return (
    <div>
      <h1 className="headline">{headline}</h1>
      {recipes.map((recipe) => (
        <RecipeListItem
          recipe={recipe}
          key={recipe.id}
          onDelete={handleDelete}
        />
      ))}
      <hr />
      <RecipeForm onSave={handleSave} />
    </div>
  );
}

export default RecipeList;
