import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  private token;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];

    });
  }

  onPut(post: NgForm) {
    let post1 = post.value;
    if(post1.password!= post1.password_confirmation)
    { 
      alert("passwords don't match...");
      return;
    }
    post1.resetToken = this.token;
    console.log(post1);
    this.http.post(environment.baseUrl+'api/resetPassword', post1).subscribe(res => {
      console.log(res);
      alert("Password updated succesfully.. login to continue");
      this.router.navigateByUrl("/home");
    }, err => {
      console.log(err);
    });

  }



}
