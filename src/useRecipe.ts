import axios from 'axios';
import { useState, useEffect } from 'react';
import { Recipe } from './types/Recipe';

function useRecipe() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get<Recipe[]>(
        'http://localhost:3001/recipe',
      );
      setRecipes(data);
    }
    fetchData();
  }, []);

  async function handleDelete(id: number) {
    try {
      await axios.delete('http://localhost:3001/recipe/' + id);
      setRecipes((prevRecipes) => {
        return prevRecipes.filter((recipe) => recipe.id !== id);
      });
    } catch (e) {
      console.error('Beim Löschen ist ein Fehler aufgetreten', e);
      alert('Es ist ein Fehler aufgetreten');
    }
  }

  return {
    recipes,
    handleDelete,
  };
}

export default useRecipe;
