import { Ingredient } from '../shared/ingredient.model';

export interface Recipe {
    name: string;
    description: string;
    imagePath: string;
    ingredients: Ingredient[];
}