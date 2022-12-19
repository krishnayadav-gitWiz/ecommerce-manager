import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
// import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

export class DataStorageService{
    constructor(private http: HttpClient, private recipeService: RecipeService) {}
    storeRecipes() {
return this.http.put('https://recipes-and-shopping.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }
    getRecipes() {
        this.http.get<Recipe[]>('https://recipes-and-shopping.firebaseio.com/recipes.json').pipe(
        map((response) => {
            console.log(response);
            const recipes: Recipe[] = response;
            for (let recipe of recipes) {
if (!recipe['ingredients']) {
    recipe['ingredients'] = [];
}
            }
            return recipes;
        }
        ))
        .subscribe(
        (recipes: Recipe[]) => {
           
            this.recipeService.setRecipes(recipes);
        }
        );
    }
}