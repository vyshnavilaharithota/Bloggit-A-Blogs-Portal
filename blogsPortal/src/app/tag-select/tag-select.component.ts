import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-tag-select',
  templateUrl: './tag-select.component.html',
  styleUrls: ['./tag-select.component.css']
})
export class TagSelectComponent implements OnInit {
  tags:any;

  r = JSON.parse(localStorage.getItem('res'));
  constructor(private http: HttpClient, private route: Router, private cdrf: ChangeDetectorRef) { }
 
  getUser() {
    return this.r[0].id;
  }


  ngOnInit(): void {
    this.getTags();

  }
  onPut(post: NgForm) {
    let obj = post.value;
    let str = '';
    for (const [key, value] of Object.entries(obj)) {
      if (value) str = str + key + ',';
    }
    this.http.put(environment.baseUrl+'api/tag/' + this.getUser(), {
      tag: str
    }).subscribe(res => {
      console.log(res);
      this.route.navigateByUrl('/userhome');

    }, err => {
      console.log(err);
    });


  }
  getTags() {
    this.http.get(environment.baseUrl+"api/alltags").subscribe(res => {
      console.log(res);
      this.tags=res;
      this.cdrf.detectChanges();
    }, err => {
      console.log(err);
    })
  }
}


