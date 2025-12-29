export type PizzaSize = {
  id: string;
  name: string;
  diameterInCentimeters?: number;
};
export type Ingredients = {
  id: string;
  name: string;
  description?: string;
  price?: number;
};
export type Pizza = {
  id: string;
  name?: string;
  description?: string;
  price?: number;
  size: PizzaSize;
  ingredients?: Array<Ingredients>;
};
