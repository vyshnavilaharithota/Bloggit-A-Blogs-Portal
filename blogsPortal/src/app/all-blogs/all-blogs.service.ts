import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { pid } from 'process';
import { pipe } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllBlogsService {
  error:any=null;
  user:any;
  r=JSON.parse(localStorage.getItem('res'));
  getUser()
  {
    return this.r[0].id;
  }
  // blogs;
  filteredItems;
  constructor(private http: HttpClient, private route: Router) { }
  getBlogs(){
    return this.http.get(environment.baseUrl+"api/allblogs");
  }
  tagRecommendation()
  {
    return this.http.get(environment.baseUrl+"api/tags/"+this.getUser());
  }
  getTags()
  {
    return this.http.get(environment.baseUrl+"api/alltags");
  }
 

}
