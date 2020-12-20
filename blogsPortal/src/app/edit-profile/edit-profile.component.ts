import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  
  r=JSON.parse(localStorage.getItem('res'));
  constructor(private http:HttpClient,private ls:LoginService,private route:Router) { }

  ngOnInit(): void {
  }

  onPut(post: NgForm)
  {
    console.log(post.value);
    this.http.put(environment.baseUrl+"api/updateprofile/"+this.r[0].id, post.value).subscribe(res=>{
      console.log(res);
      alert("Profile Updated Succesfully.. Relogin to continue");
      this.ls.logoutMode();
    },err=>{
      console.log(err);
    });
  }

  onDelete()
  {
    if(!confirm("Are you sure..."))
      return;
    this.http.delete(environment.baseUrl+"api/user/"+this.r[0].id).subscribe(res=>{
      console.log(res);
      this.ls.logoutMode();
    },err=>{
      console.log(err);
    })
  }
}
