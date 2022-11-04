
import { AuthServices } from './auth.service';
import { Component, ViewChild } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData } from './auth.service'

@Component({
    selector:'app-auth',
    templateUrl:'./auth.component.html',
    styleUrls:['./auth.component.css']
})

export class AuthComponent{
    constructor(private autServe:AuthServices,private route:Router){}

    name='';
    email='';
    password='';
    errorMess=''
    iserror=false;
    forSignUp=false;
    errorMessage=''
    
    isLoginMode=true;
    isLoading=false;

    onSubmit(){
        this.isLoginMode = !this.isLoginMode
    }

    SubmitForm(form:NgForm){
        const email =form.value.email;
        const password = form.value.password;let errorMessage=''
        let authObs:Observable<AuthResponseData>
        if(this.isLoginMode){
           this.autServe.signIn(email,password).subscribe({next:response=>{
            console.log(response)
            this.isLoading=false;
            this.route.navigate(['/list'])
        },error:error=>{
            this.errorMess='The account is no existe'
            console.log(error)
            this.errorMessage=error.message
            this.iserror=true
        }})
        }else{
            this.isLoading=true
            this.autServe.signUp(email,password).subscribe({next:response=>{
                console.log(response)
                this.isLoading=false;
                this.route.navigate(['/auth'])
            },error:error=>{
                this.errorMess='The account is no existe'
                console.log(error)
                this.errorMessage=error.message
                this.iserror=true
            }})
        }

        // authObs.subscribe({next:response=>{
        //     console.log(response)
        //     this.isLoading=false;
        //     this.route.navigate(['/list'])
        // },error:error=>{
        //     this.errorMess='The account is no existe'
        //     console.log(error)
        //     this.errorMessage=error.message
        //     this.iserror=true
        // }})
        console.log(form.value)
        form.reset()
    }

    


}