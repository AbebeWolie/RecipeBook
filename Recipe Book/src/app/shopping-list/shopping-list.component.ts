import { Ingredient } from './../shared/Ingredient.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  // ingredient:Ingredient[] = [
  //   new Ingredient('Apples','5'),
  //   new Ingredient('Mangoes','10'),
  //   new Ingredient('Tomatoes','12')
  // ];
  constructor() { }
  ngOnInit(): void {
  }



}
