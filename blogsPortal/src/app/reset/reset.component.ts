import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  r=JSON.parse(localStorage.getItem('res'));
 
  constructor(private http:HttpClient, private route: Router,private ls:LoginService ) { }
  
  ngOnInit(): void {
  }
  
  onPut(post: NgForm)
  {
    if(post.value.password!= post.value.password_confirmation)
    {
      alert("passwords don't match...");
      return;
    }
    console.log(post.value);
    this.http.put(environment.baseUrl+"api/updateprofile/"+this.r[0].id, {password:post.value.password}).subscribe(res=>{
      console.log(res);
      alert("Password Updated...Relogin to continue");
      this.ls.logoutMode();
      // this.route.navigateByUrl('/profile');

    },err=>{
      console.log(err);
    });
  }
}
