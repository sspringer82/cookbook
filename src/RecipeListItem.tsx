import React, { useEffect } from 'react';
import { Recipe } from './types/Recipe';
import { Padding, Row, Title } from './RecipeListItem.styles';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

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

  return (
    <Row>
      <Title>{recipe.title}</Title>
      <Padding>
        <IconButton
          aria-label="delete"
          onClick={() => {
            onDelete(recipe.id);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </Padding>
    </Row>
  );
}

export default RecipeListItem;
