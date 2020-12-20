import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import {NgForm} from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error=null;
  constructor(private loginService:LoginService,private route:Router) { 
  }

  ngOnInit(): void {
   
  }
  onLogin(login:NgForm)
  {
    this.loginService.onLogin(login);
    this.error=this.loginService.error;
  }
  
}
