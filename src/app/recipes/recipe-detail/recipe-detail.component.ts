import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe:Recipe

  recipelist:Recipe[]=[new Recipe('Recipe Two','This is the description for list of recipe on Listed on The Services','https://th.bing.com/th/id/R.c79e1a73dbd97dbe2ac27926067c2f60?rik=aZ%2b4bvgMGOeZug&pid=ImgRaw&r=0')]
  constructor(private services:RecipeService) { }

  ngOnInit(): void {
    
  }

  add(){
   
  }

}
