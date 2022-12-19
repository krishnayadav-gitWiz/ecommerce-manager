import { Component, OnInit, Input } from '@angular/core';
// , Output, EventEmitter

import { Recipe } from '../../recipe.model';
// import { RecipeService } from '../../recipe.service';
@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
    @Input() recipe: Recipe;
    @Input() index: number;
    // @Output() recipeSelected = new EventEmitter<void>();

  // constructor(private recipeService: RecipeService) { }
   

  ngOnInit() {
  }
    // onSelected() {
    //   this.recipeService.recipeSelected.emit(this.recipe);
    // }
}
