import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, Subject, tap } from 'rxjs';
import { User } from './user.model';


export interface AuthResponseData{
    kind:string;
    idToken:string;
    email:string;
    refreshToken:string;
    expiresIn:string;
    localId:string;
    registered?:boolean;
}

@Injectable({
    providedIn:'root'
})

export class AuthServices{
user = new BehaviorSubject<User>(null)

// Service Injection

constructor(private http:HttpClient){}


// Sign Up Methode

    signUp(email:string,password:string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDBqJTTZYh9Yo8AeMPOCLlBvIHnAxfzzgc',{
            email:email,
            password:password,
            returnSecureToken:true
        }).pipe(tap(responseData=>{
            const expirationDate=new Date(new Date().getTime() + +responseData.expiresIn*100);
            const user =new User(
                responseData.email,
                responseData.localId,
                responseData.idToken,
                expirationDate
                );
                this.user.next(user);
           console.log('This is The Response Data: ',responseData)
        }))
    }

    // Sign In Methode

    signIn(email:string,password:string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDBqJTTZYh9Yo8AeMPOCLlBvIHnAxfzzgc',{
            email:email,
            password:password,
            returnSecureToken:true
        }).pipe(tap(responsData=>{
           this.handelAuthenticatio(responsData.email,responsData.localId,responsData.idToken,+responsData.expiresIn);
            console.log(responsData)
        }));
    }

    private handelAuthenticatio(
        email:string,
        userId:string,
        token:string,
        expirseIn:number){
        const expirationDate =new Date(new Date().getTime()+ expirseIn*100);
        const user =new User(
            email,
            userId,
            token,
            expirationDate
            );
            this.user.next(user);
    }

    logout(){
        this.user.next(null)
    }
}