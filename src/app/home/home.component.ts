import { map } from 'rxjs';
import { Component, NgProbeToken, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  a=[1,3,4,5];
  obj={name:"abebe",status:"student",gender:"Male"}
 

  constructor() { }

  ngOnInit(): void {

  let map=new Map([
    ["name",12],
  ])

   
  }

  forEch(){
    this.a.forEach(value=>{
      console.log(value)
    })

    for(let x in this.a){
      console.log(this.a[x])
    }
    console.log(...this.obj.name)
  }
 

}
