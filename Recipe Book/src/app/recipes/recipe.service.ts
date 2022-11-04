import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipess:Recipe[]=[];

 
  constructor() { }

  getRecipe(){
   return this.recipess=[  new Recipe('Recipe one','This is the description for list of recipe on Listed on The Services','https://th.bing.com/th/id/R.c79e1a73dbd97dbe2ac27926067c2f60?rik=aZ%2b4bvgMGOeZug&pid=ImgRaw&r=0'),
    new Recipe('Recipe Two','This is the description for list of recipe on Listed on The Services','https://th.bing.com/th/id/R.c79e1a73dbd97dbe2ac27926067c2f60?rik=aZ%2b4bvgMGOeZug&pid=ImgRaw&r=0'),
    new Recipe('Recipe Three','This is the description for list of recipe on Listed on The Services','https://th.bing.com/th/id/R.c79e1a73dbd97dbe2ac27926067c2f60?rik=aZ%2b4bvgMGOeZug&pid=ImgRaw&r=0'),
    new Recipe('Recipe Four','This is the description for list of recipe on Listed on The Services','https://th.bing.com/th/id/R.c79e1a73dbd97dbe2ac27926067c2f60?rik=aZ%2b4bvgMGOeZug&pid=ImgRaw&r=0'),]
  
  }

  pusher(){
    return this.recipess.push(new Recipe('Recipe Three','This is the description for list of recipe on','https://th.bing.com/th/id/R.c79e1a73dbd97dbe2ac27926067c2f60?rik=aZ%2b4bvgMGOeZug&pid=ImgRaw&r=0'))
    // return[
    //   new Recipe('Recipe Three','This is the description for list of recipe on','https://th.bing.com/th/id/R.c79e1a73dbd97dbe2ac27926067c2f60?rik=aZ%2b4bvgMGOeZug&pid=ImgRaw&r=0'),
    //   new Recipe('Recipe Three','This is the description for list of recipe on','https://th.bing.com/th/id/R.c79e1a73dbd97dbe2ac27926067c2f60?rik=aZ%2b4bvgMGOeZug&pid=ImgRaw&r=0')
    // ]
  }


  getrec(index:number){
    return this.recipess[index];
  }
}
