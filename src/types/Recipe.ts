export type Recipe = {
  id: number;
  title: string;
  ingredients: Ingredient[];
  steps: string[];
  rating: number;
  image?: string;
};

export type Ingredient = {
  title: string;
  amount: number;
  unit: string;
};
