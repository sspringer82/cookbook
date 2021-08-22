import React, { useEffect } from 'react';
import { Recipe } from './types/Recipe';
import './RecipeListItem.css';
import classNames from 'classnames';

type Props = {
  recipe: Recipe;
  onDelete: (id: number) => void;
};

function RecipeListItem({ recipe, onDelete }: Props): React.ReactElement {
  useEffect(() => {
    return () => {
      console.log('Component mit der ID ', recipe.id, ' wurde entfernt');
    };
  }, [recipe.id]);

  let titleClasses = classNames({
    RecipeListItemTitle: true,
    RecipeListItemPadding: true,
  });

  return (
    <div className="RecipeListItemRow">
      <div className={titleClasses}>{recipe.title}</div>
      <div className="RecipeListItemButton RecipeListItemPadding">
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
