import { RecipeService } from './../../recipe.service';
import { Recipe } from './../../recipe.model';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-recip-item',
  templateUrl: './recip-item.component.html',
  styleUrls: ['./recip-item.component.css']
})
export class RecipItemComponent implements OnInit {
  @Input() recipe:Recipe;
  @Output() recipeSelected = new EventEmitter<Recipe>();
  
//   recipes:Recipe[]=[  new Recipe('Recipe one','This is the description for list of recipe on','https://th.bing.com/th/id/R.c79e1a73dbd97dbe2ac27926067c2f60?rik=aZ%2b4bvgMGOeZug&pid=ImgRaw&r=0'),
//   new Recipe('Recipe Two','This is the description for list of recipe on','https://th.bing.com/th/id/R.c79e1a73dbd97dbe2ac27926067c2f60?rik=aZ%2b4bvgMGOeZug&pid=ImgRaw&r=0'),
//   new Recipe('Recipe Three','This is the description for list of recipe on','https://th.bing.com/th/id/R.c79e1a73dbd97dbe2ac27926067c2f60?rik=aZ%2b4bvgMGOeZug&pid=ImgRaw&r=0')

// ]

recipes:Recipe[];


  constructor(private recipeserv:RecipeService) { }
  

  ngOnInit() {
    
    this.recipes = this.recipeserv.getRecipe()
  }

public onSelected(){
    this.recipeSelected.emit();
  }

}
