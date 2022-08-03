import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import * as M from 'materialize-css';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userID?:string;
  constructor(private router:Router) { }

  getUid(){
    return this.userID
  }
  isAuthenticated(){
    // const fir=firebase.auth().currentUser?.email
    // console.log('fir',fir)
    // const uid=localStorage.getItem('userID');
    const uid=firebase.auth().currentUser?.email;
    if(uid) this.userID=uid
    return uid?true:false
  }

  register(email:string,password:string){
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((userdetails:any)=>{
      this.userID=userdetails.user.email;
      localStorage.setItem('userID',userdetails.user.email)
      console.log(userdetails)
      M.toast({html: 'User saved succesfully',classes:'green'})
      this.router.navigate(['/'])
    }).catch((err)=>{
      console.log(err)
      M.toast({html: 'Error saving user',classes:'red'})
    })
  }

  login(email:any,password:any){
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((userdetails:any)=>{
      this.userID=userdetails.user.email;
      localStorage.setItem('userID',userdetails.user.email)
      console.log(userdetails)
      M.toast({html: 'User login succesfully',classes:'green'})
      this.router.navigate(['/'])
    }).catch((err)=>{
      console.log(err)
      M.toast({html: 'Error logging in',classes:'red'})
    })
  }

  logout(){
    firebase.auth().signOut().then(()=>{
      this.userID=undefined
      localStorage.removeItem('userID')
    })
    this.router.navigate(['/'])
  }

}
