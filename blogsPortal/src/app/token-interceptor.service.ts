import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  getToken() {
    let token = JSON.parse(localStorage.getItem('res'));
    if (token)
      return (token.access_token);
    return null;
  }
  intercept(req, next) {
    if (this.getToken()) {
      let tokenizedRequest = req.clone({
        setHeaders: {
          Authorization: "Bearer " + this.getToken()
        }
      });
      return next.handle(tokenizedRequest);
    }
    return next.handle(req);

  }
}
