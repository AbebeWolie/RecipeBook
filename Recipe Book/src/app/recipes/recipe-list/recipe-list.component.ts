import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
//   @Output() recipeWosSelected  = new  EventEmitter<Recipe>();
//   recipes:Recipe[]=[  new Recipe('Recipe one','This is the description for list of recipe on','https://th.bing.com/th/id/R.c79e1a73dbd97dbe2ac27926067c2f60?rik=aZ%2b4bvgMGOeZug&pid=ImgRaw&r=0'),
//   new Recipe('Recipe Two','This is the description for list of recipe on','https://th.bing.com/th/id/R.c79e1a73dbd97dbe2ac27926067c2f60?rik=aZ%2b4bvgMGOeZug&pid=ImgRaw&r=0'),
//   new Recipe('Recipe Three','This is the description for list of recipe on','https://th.bing.com/th/id/R.c79e1a73dbd97dbe2ac27926067c2f60?rik=aZ%2b4bvgMGOeZug&pid=ImgRaw&r=0')

// ]
public name:string;
public description:string;
public imagePath:string;
recipes:Recipe[]=[];
userrecipe:Recipe;
  constructor(private recipeservice:RecipeService) { }

  ngOnInit(){
     this.recipes=this.recipeservice.getRecipe()
  }

  addRecipe(){
    // this.recipes = this.recipeservice.getRecipe()
  }

  pushs(){
    this.recipeservice.pusher()
  }

}
