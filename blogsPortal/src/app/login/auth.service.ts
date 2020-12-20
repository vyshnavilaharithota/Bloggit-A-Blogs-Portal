import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private loginService:LoginService,private router:Router) { }

  canActivate(): boolean {
    if (!this.loginService.loginMode()) {
      this.router.navigateByUrl('/home');
      return false;
    }
    
    return true;
  }
}
