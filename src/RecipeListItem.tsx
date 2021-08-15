import React from 'react';

function RecipeListItem(): React.ReactElement {
  const recipe = {
    title: 'Schnitzel',
  };
  return (
    <div>
      <div>
        {recipe.title} <button>löschen</button>
      </div>
    </div>
  );
}

export default RecipeListItem;
