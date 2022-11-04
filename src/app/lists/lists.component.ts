import { Ingredient } from './../shared/Ingredient.model';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { IngredientServiceService } from 'src/app/services/ingredient-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  signupForm:FormGroup
  ingredent=[];
  name=''
  amount:number;
  price:number;
  users:Ingredient;
  pattern1 =  "^[1-9]+[0-9]*$"

  constructor(private ingredientService:IngredientServiceService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      "name":new FormControl(null,Validators.required),
      "amount":new FormControl(null,[Validators.required,Validators.pattern(this.pattern1)]),
      "price":new FormControl(null,[Validators.required,Validators.pattern(this.pattern1)])
    })
  }


  add(posts:Ingredient){
    //  this.ingredent.push(new Ingredient(this.name,this.amount,this.price))
    //  this.signupForm.reset()
     
    this.ingredientService.AddIngredient(posts).subscribe(data=>{
      console.log(data)
    })
  
    }


}
