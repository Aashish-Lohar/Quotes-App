import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
  }
  register(regform:NgForm){
    console.log(regform.value);
    this.authService.register(regform.value.email,regform.value.password)
    // this.router.navigate(['/login'])
  }
  reset(regform:NgForm){
    regform.reset()
  }
}
