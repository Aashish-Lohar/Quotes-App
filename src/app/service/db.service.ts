import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import * as M from 'materialize-css';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private authService:AuthService) { }
  saveQuote(quote:string|null){
    const d=new Date()
    firebase.firestore().collection('quotes').add({
      text:quote,
      by:this.authService.getUid(),
      time:d.toString()
    }).then((data)=>{
      M.toast({html: 'Quote saved succesfully',classes:'green'})
    }).catch(err=>{
      console.log(err)
      M.toast({html: 'Error saving quote',classes:'red'})
    })
  }

  getAllQuotes(){
    return firebase.firestore().collection('quotes').get()
  }
}
