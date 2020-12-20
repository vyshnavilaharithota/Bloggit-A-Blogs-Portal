import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Router } from '@angular/router';
import { pid } from 'process';
import { pipe } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private route: Router) { }

  onPost(formData: FormData) {
    this.http.post(environment.baseUrl+'api/blogs', formData).subscribe(res => {
      console.log(res);
      this.route.navigateByUrl('/profile');
    },
      err => {
        console.log(err);
      });
  }
  onPut(formData: FormData, id: any) {
    var object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });
    // var json = JSON.stringify(object);
    console.log(formData);
    this.http.put(environment.baseUrl+'api/blogs/' + id, object).subscribe(res => {
      console.log(res);
      this.route.navigateByUrl('/profile');
    },
      err => {
        console.log(err);
      });
  }

  getTags()
  {
    return this.http.get(environment.baseUrl+"api/alltags");
  }
}
