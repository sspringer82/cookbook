import React from 'react';
import { Recipe } from './types/Recipe';

type Props = {
  recipe: Recipe;
};

function RecipeListItem({ recipe }: Props): React.ReactElement {
  return (
    <div>
      <div>
        {recipe.title} <button>löschen</button>
      </div>
    </div>
  );
}

export default RecipeListItem;
