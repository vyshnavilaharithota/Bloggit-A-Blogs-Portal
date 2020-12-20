import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
  error:string;
  ngOnInit(): void {

  }

  signIn(admin:NgForm)
  {
    if(admin.value.username != 'admin' || admin.value.password != 'admin')
    {
      this.error="Invalid Credentials";
      return;
    }
    this.error='';
    localStorage.setItem('res','admin');
    this.router.navigateByUrl('/allusers');
  }  

}
