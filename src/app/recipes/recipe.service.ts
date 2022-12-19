import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  // recipeSelected = new EventEmitter<Recipe>();

private recipes: Recipe[] = [
    {name: 'Eggs',
    description: 'This is just awesom!',
    imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ueqyvFe5ZjsoLG5QLXLONV4LC2mEZEMrG8PefSvqxe5o0_fK',
    ingredients: [
        {name: 'Egg', amount: 10},
        {name: 'Egg', amount: 10}
    ]},
    {name: 'King burger',
    description: 'This is just awesom!',
    imagePath: 'https://www.vegrecipesofindia.com/wp-content/uploads/2015/05/veggie-burger-recipe-5.jpg',
    ingredients: [
        {name: 'Spicy', amount: 20},
        {name: 'Spicy', amount: 20}
    ]},
    {name: 'Dominos',
    description: 'This is just awesom!',
    imagePath: 'https://recipes.timesofindia.com/thumb/53110049.cms?imgsize=148092&width=800&height=800',
    ingredients: [
        {name: 'Pizza grill', amount: 15},
        {name: 'Pizza grill', amount: 15}
    ]}
    ];

    constructor(private slService: ShoppingListService) {}

    setRecipes(recipes: Recipe[]) {
      this.recipes = recipes;
      this.recipesChanged.next(this.recipes.slice());
    }
getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
