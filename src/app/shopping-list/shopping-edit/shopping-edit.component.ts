import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
// , EventEmitter, Output
// import { Ingredient } from '../../shared/ingredient.model';
// import { ShoppingListComponent } from '../shopping-list.component';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Ingredient} from '../../shared/ingredient.model';

// import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  // @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  // @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;
  //  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor(private slService: ShoppingListService) {
  }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.slService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        }
      );
  }

  onSubmit(form: NgForm) {
    // const imgName = this.nameInputRef.nativeElement.value;
    // const imgAmount = this.amountInputRef.nativeElement.value;
    const value = form.value;
    const newIngredient = {name: value.name, amount: value.amount};
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
    // this.ingredientAdded.emit(newIngredient);
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
