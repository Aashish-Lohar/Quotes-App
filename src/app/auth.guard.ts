import { Injectable } from '@angular/core';
import {CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authServ:AuthService){}
  canActivate(){
    return this,this.authServ.isAuthenticated()
  }
    
  
}
