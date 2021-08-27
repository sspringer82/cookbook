import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RecipeListItem from './RecipeListItem';
import { Recipe } from './types/Recipe';

const recipe: Recipe = {
  id: 1,
  title: 'Nudeln',
  ingredients: [{ title: 'Mehl', amount: 1, unit: 'kg' }],
  steps: ['machen'],
};

describe('RecipeListItem', () => {
  it('should render', () => {
    render(
      <MemoryRouter>
        <RecipeListItem recipe={recipe} onDelete={jest.fn()} />
      </MemoryRouter>,
    );

    expect(screen.getByText('Nudeln')).toBeInTheDocument();
    expect(screen.getByTestId('title')).toHaveTextContent('Nudeln');
  });

  it('should delete the Recipe', () => {
    const deleteSpy = jest.fn();
    render(
      <MemoryRouter>
        <RecipeListItem recipe={recipe} onDelete={deleteSpy} />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByTestId('deleteButton'));

    expect(deleteSpy).toHaveBeenCalledWith(1);
  });

  it('should match a snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <RecipeListItem recipe={recipe} onDelete={jest.fn()} />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
