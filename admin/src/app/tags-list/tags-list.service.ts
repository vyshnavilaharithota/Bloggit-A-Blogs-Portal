import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagsListService {

  constructor(private http:HttpClient) { }

  createTag(tags:any)
  {
     return this.http.post(environment.baseUrl+"api/tags",tags);
  }

  getTags()
  {
    return this.http.get(environment.baseUrl+'api/alltags');
  }
}
