import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProfileService {
  r=JSON.parse(localStorage.getItem('res'));
  getUser()
  {
    return this.r[0].id;
  }
  getName()
  {
    return this.r[0].name;
  }
  // id=this.getUser;
  error:any=null;
  constructor(private http: HttpClient, private route: Router) { }
  
  getBlogsbyId(){
    // this.getUser();
    return this.http.get(environment.baseUrl+"api/blogs/"+this.getUser());
  }
  onDelete(id)
  {
    return this.http.delete(environment.baseUrl+"api/blogs/"+id);
  }
}
