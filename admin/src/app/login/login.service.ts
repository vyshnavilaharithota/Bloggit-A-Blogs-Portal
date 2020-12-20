import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private route: Router) { }

  canActivate(): boolean {
    if (!localStorage.getItem('res')) {
      this.route.navigate(['login']);
      return false;
    }
    return true;
  }


}
