import { Dialog, DialogContent } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { Route, RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import RecipeForm from './RecipeForm';
import RecipeListItem from './RecipeListItem';
import { Recipe } from './types/Recipe';

type Props = {};

type State = {
  recipes: Recipe[];
};

class RecipeList extends React.Component<Props & RouteComponentProps, State> {
  state = {
    recipes: [] as Recipe[],
  };

  async componentDidMount() {
    const { data } = await axios.get<Recipe[]>(
      `${process.env.REACT_APP_BACKEND}recipe`,
    );
    this.setState({ recipes: data });
  }

  async handleDelete(id: number) {
    try {
      await axios.delete(`${process.env.REACT_APP_BACKEND}recipe/${id}`);

      this.setState((prevState) => {
        return {
          recipes: prevState.recipes.filter((recipe) => recipe.id !== id),
        };
      });
    } catch (e) {
      console.error('Beim Löschen ist ein Fehler aufgetreten', e);
      alert('Es ist ein Fehler aufgetreten');
    }
  }

  async handleSave(recipe: Omit<Recipe, 'id'>): Promise<void> {
    const formData = new FormData();
    formData.append('title', recipe.title);
    formData.append('ingredients', JSON.stringify(recipe.ingredients[0]));
    formData.append('ingredients', JSON.stringify(recipe.ingredients[1]));
    formData.append('ingredients', JSON.stringify(recipe.ingredients[2]));
    formData.append('steps', recipe.steps[0]);
    formData.append('steps', recipe.steps[1]);
    formData.append('steps', recipe.steps[2]);
    if (recipe.image) {
      formData.append('image', recipe.image);
    }

    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND}recipe`,
      formData,
      {
        headers: { 'content-type': 'multipart/form-data' },
      },
    );

    this.setState((prevState) => {
      return {
        recipes: [...prevState.recipes, data],
      };
    });
  }

  render() {
    return (
      <div>
        {this.state.recipes.map((recipe) => (
          <RecipeListItem
            recipe={recipe}
            key={recipe.id}
            onDelete={(id: number) => this.handleDelete(id)}
          />
        ))}
        <Link to="/new">Neuen Datensatz anlegen</Link>
        <Route path="/new">
          <Dialog
            open={true}
            onClose={() => {
              this.props.history.push('/');
            }}
            aria-labelledby="form-dialog-title"
            aria-describedby="form-dialog-description"
          >
            <DialogContent>
              <RecipeForm
                onSave={async (recipe: Omit<Recipe, 'id'>) => {
                  await this.handleSave(recipe);
                  this.props.history.push('/');
                }}
              />
            </DialogContent>
          </Dialog>
        </Route>
      </div>
    );
  }
}

export default withRouter(RecipeList);
