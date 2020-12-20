import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) { }
  getBlogsbyTagName(name:String){
    console.log(name);
    return this.http.get(environment.baseUrl+"api/tag/"+name);
  }
}
