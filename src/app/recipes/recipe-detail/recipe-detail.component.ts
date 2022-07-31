import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
recipe: Recipe;
id:number;
  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) => {
        this.id = +params['id'];  
        this.recipe = this.recipeService.getRecipesId(this.id)
      }
    )
  }
  addtoShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }
  gotoEdit(){
    this.router.navigate(["edit"], {relativeTo: this.route} )
  }

}
