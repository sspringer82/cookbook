import React, { useState } from 'react';
import RecipeListItem from './RecipeListItem';

import './RecipeList.css';
import useRecipe from './useRecipe';
import RecipeForm from './RecipeForm';
import { Dialog, DialogContent } from '@material-ui/core';
import { Link, Route, useHistory } from 'react-router-dom';
import { Recipe } from './types/Recipe';

function RecipeList(): React.ReactElement {
  const history = useHistory();
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
      <Link to="/new">Neuen Datensatz anlegen</Link>
      <Route path="/new">
        <Dialog
          open={true}
          onClose={() => {
            history.push('/');
          }}
          aria-labelledby="form-dialog-title"
          aria-describedby="form-dialog-description"
        >
          <DialogContent>
            <RecipeForm
              onSave={async (recipe: Omit<Recipe, 'id'>) => {
                await handleSave(recipe);
                history.push('/');
              }}
            />
          </DialogContent>
        </Dialog>
      </Route>
    </div>
  );
}

export default RecipeList;
