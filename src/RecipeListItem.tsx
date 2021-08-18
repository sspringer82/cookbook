import React from 'react';
import { Recipe } from './types/Recipe';

type Props = {
  recipe: Recipe;
  onDelete: (id: number) => void;
};

function RecipeListItem({ recipe, onDelete }: Props): React.ReactElement {
  return (
    <div>
      <div>
        {recipe.title}{' '}
        <button
          onClick={() => {
            onDelete(recipe.id);
          }}
        >
          löschen
        </button>
      </div>
    </div>
  );
}

export default RecipeListItem;
