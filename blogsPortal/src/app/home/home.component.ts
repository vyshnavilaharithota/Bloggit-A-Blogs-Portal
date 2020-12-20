import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  config: any;
  fullpage_api: any;
  constructor(private router:Router) { 
    this.config = {
 
      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['getstarted', 'login', 'signup'],
      menu: '#menu',
      navigation: true,
      // fullpage callbacks
      afterResize: () => {
        console.log("After resize");
      },
      afterLoad: (origin, destination, direction) => {
        console.log(origin.index);
      }
    };
  }

  ngOnInit(): void {
    window.addEventListener('storage', (event) => {
      if (event.storageArea == localStorage) {
        let token = localStorage.getItem('res');
        if(token) { 
            this.router.navigate(['/userhome']); 
        }
      }
    }, false);
  }

  
  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }
}
