import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { shoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;
  
  constructor(private slService: shoppingService) { }
  
  ngOnInit() {
   this.ingredients = this.slService.getIngredients();
   this.subscription = this.slService.ingredientsChanged.subscribe(
    (ingredientsAdded: Ingredient[]) => {
      this.ingredients = ingredientsAdded
    }
   )
  }
  onEditItem(index : number){
    this.slService.startedEditing.next(index);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
 

}
