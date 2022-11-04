import { Ingredient } from './../../shared/Ingredient.model';
import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { IngredientServiceService } from 'src/app/services/ingredient-service.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 signupForm:FormGroup
 ingredent=[];
 name=''
 amount:number;
 price:number;
 users:Ingredient;
 pattern1 =  "^[1-9]+[0-9]*$"
  constructor(private ingredientService:IngredientServiceService) { }

  ngOnInit(): void {
    
    //this.users = new Ingredient(this.name,this.amount)
    
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

  fechepost(){
    this.ingredientService.fetchData().subscribe(data=>{
      console.log(data)
      this.ingredent =data
      console.log(this.ingredent)
    })
  }

  Delete(event:Ingredient){
   let getIndex= this.ingredent.indexOf(event)
   this.ingredent.splice(getIndex)

  }

  clearData(){
    this.ingredent=[]
    console.log('Cleared')
  }



  }
