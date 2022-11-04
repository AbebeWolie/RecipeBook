import { SpinnerComponent } from './Spiner/spinner.component';
import { AuthComponent } from './Authentication/auth.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RoutingComponent } from './app-routing.module';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipItemComponent } from './recipes/recipe-list/recip-item/recip-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ListsComponent } from './lists/lists.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RoutingComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipItemComponent,
    ShoppingEditComponent,
    DropdownDirective,
    HomeComponent,
    AuthComponent,
    SpinnerComponent,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
