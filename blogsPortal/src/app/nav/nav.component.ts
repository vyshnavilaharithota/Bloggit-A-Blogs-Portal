import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import * as M from 'node_modules/materialize-css/dist/js/materialize.min';
import { LoginService } from '../login/login.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';




@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // blogtag:any;
  constructor(private loginService: LoginService, private route: Router) { }
  ngOnInit(): void {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
    // console.log(this.tag);
  }
  logout() {
    return this.loginService.logoutMode();
  }
  isloggedin() {
    return this.loginService.loginMode();
  }
  profile(){
    this.loginService.onprofile();
  }

 
}
