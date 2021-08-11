import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { NgForm, EmailValidator } from '@angular/forms';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { environment } from 'src/environments/environment';

// interface User{
//   email : string;
//   password : string;
// }

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loader:boolean = false;
  isLoggedIn = false;
  error = null;

  constructor(private http: HttpClient, private route: Router) { }
  onLogin(form: NgForm) {
    this.loader= true;
    this.http.post(environment.baseUrl + 'api/login', form.value).subscribe(res => {
      
      console.log(res);
      // localStorage.setItem
      this.error = {};
      this.isLoggedIn = true;

      localStorage.setItem('res', JSON.stringify(res));
      this.loader =false;
      this.route.navigateByUrl('/userhome');
    },
      err => {
        this.loader=false;
        console.log(err);
        this.isLoggedIn = false;
        this.error = err.error.error;
      });
  }

  loginMode() {
    if (localStorage.getItem('res'))
      return true;
    else
      return false;
  }
  logoutMode() {
   
    this.http.post(environment.baseUrl + 'api/logout',{}).subscribe(res=>{
      console.log(res);
    },err=>{
      console.error(err);
    })
    localStorage.clear();
    this.route.navigateByUrl('/home');
  }
  onprofile() {
    if (!this.loginMode()) {
      return;
    }
    this.route.navigateByUrl('/profile');
  }
} 