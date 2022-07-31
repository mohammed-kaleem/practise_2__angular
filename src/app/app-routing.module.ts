import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipestartComponent } from "./recipes/recipestart/recipestart.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes:Routes = [
    {path: '', redirectTo: '/recipes', pathMatch:'full'},
    {path:'recipes', component: RecipesComponent,
    children:[
        {path:'', component: RecipestartComponent },
        {path:'new', component: RecipeEditComponent},
        {path:':id', component: RecipeDetailComponent},
        {path:':id/:edit', component: RecipeEditComponent}
    ]},
    {path:'shopping-list', component: ShoppingListComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}