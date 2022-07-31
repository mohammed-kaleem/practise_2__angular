import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { shoppingService } from './shopping-list/shopping.service';

// Practise files
import { HomeComponent } from './practise/routing/home/home.component';
import { UsersComponent } from './practise/routing/users/users.component';
import { ServersComponent } from './practise/routing/servers/servers.component';
import { UserComponent } from './practise/routing/users/user/user.component';
import { EditServerComponent } from './practise/routing/servers/edit-server/edit-server.component';
import { ServerComponent } from './practise/routing/servers/server/server.component';
import { ServersService } from './practise/routing/servers/servers.service';
import { PracticeRoutingComponent } from './practise/routing/practice-routing.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipestartComponent } from './recipes/recipestart/recipestart.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
// const appRoutes: Routes = [
// {path: '', component: HomeComponent},
// {path: 'users', component: UserComponent},
// {path: 'users/:id/:name', component: UserComponent},
// {path: 'servers', component: ServersComponent}
// ]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PracticeRoutingComponent,
    RecipestartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [shoppingService,
    ServersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
