import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bloggit';
  isForgotLink:boolean;

  constructor(private router: Router){}

  checkLink()
  {
   if(this.router.url=='/forgot' || (this.router.url).includes('/forgotPassword'))
        return true;
    else
        return false;
  
  }
}
