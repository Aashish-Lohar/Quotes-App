import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,Validators} from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { CurrentuserService } from '../service/currentuser.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor(private authService:AuthService,private currentUser:CurrentuserService){
  }
  email=new FormControl('',[Validators.required,Validators.email ]);
  password=new FormControl('',[Validators.required,Validators.minLength(6) ]);
  loginForm=new FormGroup({
    email:this.email,
    password:this.password
  })

  login(){
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value.email,this.loginForm.value.password)
    this.currentUser.current(this.email.value)
  }
  reset(){
    this.loginForm.reset()
  }
}
