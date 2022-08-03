import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import * as M from 'materialize-css';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentuserService {
  currentEmail:any;
  constructor() { 
  }
  getYourQuote(){
    return firebase.firestore().collection('quotes').get()
  }
  current(email:any){
    this.currentEmail=email;
    localStorage.setItem('currentUser',this.currentEmail);
    console.log("current",this.currentEmail)
  }
}
