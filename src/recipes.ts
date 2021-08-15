import type { Recipe } from './types/Recipe';

const recipes: Recipe[] = [
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
  {
    id: 2,
    title: 'Bratkartoffeln',
    ingredients: [
      {
        title: 'Kartoffeln',
        amount: 2,
        unit: 'kg',
      },
      {
        title: 'Zwiebeln',
        amount: 0.5,
        unit: 'kg',
      },
    ],
    steps: ['Kartoffeln schälen', 'braten'],
    rating: 5,
  },
];

export default recipes;
