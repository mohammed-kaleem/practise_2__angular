import { Component, ElementRef,  OnDestroy,  OnInit,  ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { shoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editingItemIndex:number;
  editingItem:Ingredient;
  constructor(private slService: shoppingService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index:number) => {
        this.editingItemIndex = index;
        this.editMode = true;
        this.editingItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editingItem.name,
          amount : this.editingItem.amount
        })
        
      }
    );
  }

onAdditem(form: NgForm){
  const value = form.value;
  const newIngredient = new Ingredient(value.name,value.amount);
  if(this.editMode){
    this.slService.updateIngredient(this.editingItemIndex, newIngredient)
  }else{
    this.slService.addIngredient(newIngredient);
  }
  this.editMode = false;
  this.slForm.reset();  
  
}
onClear(){
  this.slForm.reset();
  this.editMode = false;
}
onDeleteItem(){
  this.slService.deleteIngredient(this.editingItemIndex)
  this.onClear();
}
ngOnDestroy(): void {
  this.subscription.unsubscribe();
}
}
