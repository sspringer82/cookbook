import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Recipe } from './types/Recipe';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

function RecipeDetails(): React.ReactElement {
  const [recipe, setRecipe] = useState<Recipe>();
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND}recipe/${id}`,
      );
      setRecipe(data);
    }
    fetchData();
  }, [id]);

  if (recipe) {
    return (
      <div>
        <h2>{recipe.title}</h2>
        <Button
          onClick={() => {
            history.push('/');
          }}
        >
          zurück
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Keine Daten gefunden.</h2>
        <Link to="/">zurück</Link>
      </div>
    );
  }
}

export default RecipeDetails;
