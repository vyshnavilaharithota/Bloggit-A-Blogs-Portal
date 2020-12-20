import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }
  getUsername(id)
  {
    return this.http.get(environment.baseUrl+'api/name/'+id);
  }
  onLike(options)
  {
    return this.http.put(environment.baseUrl+'api/blogs/'+options.id, {
      likes: parseInt(options.likes)+1
    });
  }
  onDislike(options)
  {
    return this.http.put(environment.baseUrl+'api/blogs/'+options.id, {
      likes: parseInt(options.likes)-1
    });
  }
}
