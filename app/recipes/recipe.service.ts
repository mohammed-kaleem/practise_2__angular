import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { shoppingService } from "../shopping-list/shopping.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService{
    selectedRecipe = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
        new Recipe('Dessert', 
        'Delicious meals are tasty, appetizing, scrumptious, yummy, luscious, delectable or unpleasant.', 
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/no-bake-desserts-espresso-cheesecake-1562596828.jpg',
        [
            new Ingredient('meat', 1),
            new Ingredient('French Fries', 20)
        ]   
        ),
        new Recipe('Burger King',
        'A hamburger (or burger for short) is a food consisting of fillings —usually a patty of ground meat',
        'https://media-cdn.tripadvisor.com/media/photo-s/17/3b/9a/d2/burger-king.jpg',
        [
            new Ingredient('buns',2),
            new Ingredient('meat',6)
        ])
      ]; 
      constructor(private slService: shoppingService) {}
      getRecipe(){
        return this.recipes.slice()
      }
      getRecipesId(index:number){
        return this.recipes[index]
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients)
      }
}