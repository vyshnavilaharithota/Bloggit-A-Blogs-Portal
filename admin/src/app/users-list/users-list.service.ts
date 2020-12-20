import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  constructor(private http:HttpClient) { }

  getUsers()
  {
    return this.http.get(environment.baseUrl+'api/allusers');
  }

  onDeleteUser(userId)
  {
    return this.http.delete(environment.baseUrl+'api/user/'+userId);
  }
}
