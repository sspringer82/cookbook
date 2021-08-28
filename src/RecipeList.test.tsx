import { act, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RecipeList from './RecipeList';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const testData = [
  {
    id: 1,
    title: 'Schnitzel',
    ingredients: [
      {
        title: 'Fleisch',
        amount: 1,
        unit: 'kg',
      },
      {
        title: 'Panade',
        amount: 0.5,
        unit: 'kg',
      },
    ],
    steps: ['panieren', 'braten'],
    rating: 5,
  },
];

describe('RecipeList', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
    mock.onGet(`${process.env.REACT_APP_BACKEND}recipe`).reply(200, testData);
  });

  afterEach(() => {
    mock.reset();
  });

  it('should render the list with data from the server', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <RecipeList />
        </MemoryRouter>,
      );
    });

    const result = await screen.findAllByTestId('title');
    expect(result.length).toBe(1);
  });
});
