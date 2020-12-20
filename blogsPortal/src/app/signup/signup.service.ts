import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { NgForm, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


interface SignUpFormErrorModel {
  email?: string[];
  password?: string[];
  name?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  errorObject: SignUpFormErrorModel = {};
  constructor(private http: HttpClient, private route: Router) { }

  onSignUp(form: NgForm) {
    this.http.post(environment.baseUrl+'api/signup', form.value).subscribe(res => {
      console.log(res);
      localStorage.setItem('res', JSON.stringify(res));
      this.errorObject = {};
      this.route.navigateByUrl('/tagselect');
    },
      err => {
        console.log(err);
        if (err && err.error && err.error.errors) {
          this.errorObject = err.error.errors;
        }
      });
  }

}