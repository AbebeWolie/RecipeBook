import { Router } from '@angular/router';
import { AuthServices } from './../Authentication/auth.service';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  @Output() featureSelected = new EventEmitter<string>();
  private userSubscribe:Subscription;
  isAuthenticated=false
 inner:any
 displayy='none'
 margin:any
  constructor(private autserve:AuthServices,private router:Router) { }

  ngOnInit() {
   this.userSubscribe = this.autserve.user.subscribe(user=>{
      this.isAuthenticated=!!user;
   })
  }

  display(){
    this.inner= !this.inner
  }
  disp(){
    this.displayy =this.displayy
    this.margin='rigth'
    
  }
  onSelect(feature:string){
   this.featureSelected.emit(feature)
  }

ngOnDestroy() {
  this.userSubscribe.unsubscribe()
}

onLogout(){
  this.autserve.logout()
  this.router.navigate(['/auth'])
}

}
