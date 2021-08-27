import React, { useContext } from 'react';
import { Recipe } from './types/Recipe';
import { Padding, Row, Title } from './RecipeListItem.styles';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { darkModeContext } from './darkModeContext';
import { Link } from 'react-router-dom';

type Props = {
  recipe: Recipe;
  onDelete: (id: number) => void;
};

function RecipeListItem({ recipe, onDelete }: Props): React.ReactElement {
  const [darkMode] = useContext(darkModeContext);

  // useEffect(() => {
  //   return () => {
  //     console.log('Component mit der ID ', recipe.id, ' wurde entfernt');
  //   };
  // }, [recipe.id]);

  return (
    <Row>
      <Title darkMode={darkMode} data-testid="title">
        <Link to={`/detail/${recipe.id}`}>{recipe.title}</Link>
      </Title>
      <Padding darkMode={darkMode}>
        <IconButton
          aria-label="delete"
          onClick={() => {
            onDelete(recipe.id);
          }}
          data-testid="deleteButton"
        >
          <DeleteIcon />
        </IconButton>
      </Padding>
    </Row>
  );
}

export default RecipeListItem;
