import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  isLoading:boolean;
  msg='';
  errormsg='';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.isLoading=false;
  }

  onPut(post:NgForm)
  {
    this.isLoading=true;
    this.http.post(environment.baseUrl+'api/sendPasswordResetLink', post.value).subscribe(res => {
      this.isLoading=false;
      let res1=res;
      console.log(res);
      if(res1['data'])
      {
        this.errormsg='';
        this.msg=res1['data']
      }
      else
      {
        this.msg='';
        this.errormsg=res1['error'];

      }
   

    });
  }

}
