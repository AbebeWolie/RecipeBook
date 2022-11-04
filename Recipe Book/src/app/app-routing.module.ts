import { ListsComponent } from './lists/lists.component';
import { AuthComponent } from './Authentication/auth.component';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

const routes: Routes = [
  {path:"", pathMatch:"full",redirectTo:"home"},
  {path:'auth',component:AuthComponent},
  {path:'list',component:ListsComponent},
  {path:'home',component:HomeComponent},
  {path:'recipe',component:RecipesComponent,children:[{
  path:'recipe-detail',component:RecipeDetailComponent
  }]},
  {path:'shopping-list',component:ShoppingListComponent},
  // {path:'recipe-detail',component:RecipeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponent = [RecipesComponent,ShoppingListComponent]
