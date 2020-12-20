import { Component, OnInit } from '@angular/core';
import {SignupService} from './signup.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

interface SignUpFormErrorModel1 {
  email?: string[];
  password?: string[];
  name?: string[];
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errorObject:SignUpFormErrorModel1 = {};
  constructor(private signUpService: SignupService,private route:Router) { }
  
  ngOnInit(): void {
  }
  onSignUp(signUp:NgForm)
 {
   this.signUpService.onSignUp(signUp);
   this.errorObject=this.signUpService.errorObject;
 }

}
