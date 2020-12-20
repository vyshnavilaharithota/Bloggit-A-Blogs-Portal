import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getLocaleDayNames } from '@angular/common';
import { TagService } from './tag.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as M from "materialize-css/dist/js/materialize.min";

@Component({
  selector: 'app-tag-view',
  templateUrl: './tag-view.component.html',
  styleUrls: ['./tag-view.component.css']
})
export class TagViewComponent implements OnInit {
  
  blogs: any = [];
  error: any;
  initiated = false;
  name:String;
  photo:String;
  url:string="assets/images/icons/";
  private untilDestroyed$ = new Subject();
  constructor(private ts: TagService, private route: ActivatedRoute) { }
  ngOnDestroy(): void {
    this.blogs = [];
    this.untilDestroyed$.next();
    this.untilDestroyed$.complete();
  }

  ngOnInit(): void {
   
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {});
    this.name=this.route.snapshot.paramMap.get('name');
    if(this.name=="animals")
    {
      this.photo="animal";
    }
    else if(this.name=="birds")
    {
      this.photo="bird";
    }
    else
      this.photo=this.name;
    this.url=this.url+this.photo+".jfif";
    this.getBlogs();
    this.initiated = true;
    
  }
  
  getBlogs() {
    this.ts.getBlogsbyTagName(this.name).pipe(takeUntil(this.untilDestroyed$)).subscribe(res => {
      this.blogs = res;
      console.log(res);
      this.error = {};
    },
      error => {
        error = error;
        console.log(error);
      });
   

  }

}
