import { User } from './../Authentication/user.model';
import { AuthServices } from './../Authentication/auth.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Ingredient } from './../shared/Ingredient.model';
import { Injectable } from '@angular/core';
import { map, take, exhaustMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientServiceService {
  ingredent=[];
  name=''
  amount:number;
  price:number;

  constructor(private http:HttpClient,private authService:AuthServices) { }

   AddIngredient(post:Ingredient){
     return this.authService.user.pipe(take(1),exhaustMap(user=>{
      return this.http.post('https://myecommercewebsite-db732-default-rtdb.firebaseio.com/postIngredient.json',post,{
        params:new HttpParams().set('auth',user.token)
      })
    }))
     
   }



   fetchData(){

   return this.authService.user.pipe(take(1), exhaustMap(user=>{
      return this.http.get('https://myecommercewebsite-db732-default-rtdb.firebaseio.com/postIngredient.json',
      {
        params:new HttpParams().set('auth',user.token)
      })
    }),(map(data=>{
      for(const key in data){
        if(data.hasOwnProperty(key)){
          this.ingredent.push({...data[key],id:key})
        }
      }
      return this.ingredent
    }))
   )
   }


}
