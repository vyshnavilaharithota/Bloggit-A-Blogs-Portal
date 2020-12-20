import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLoggedin:boolean;
  constructor(private ls: LoginService, private router: Router) { }

  ngOnInit(): void {
    
  }
  loginMode()
    {
      if (localStorage.getItem('res'))
        return true;
      else
        return false;
    }
    logoutMode()
    {
      localStorage.clear();
      this.router.navigateByUrl('/');
    }


}
