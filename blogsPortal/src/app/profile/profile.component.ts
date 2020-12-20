import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileService } from './profile.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getLocaleDayNames } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit, OnDestroy {
  blogs: any = [];
  error: any;
  initiated = false;
  Name=this.prof.getName();
  isLoading:boolean;
  private untilDestroyed$ = new Subject();
  
  constructor(private prof: ProfileService,private route:Router) { }
  
  ngOnDestroy(): void {
    this.blogs = [];
    this.untilDestroyed$.next();
    this.untilDestroyed$.complete();
  }

  ngOnInit(): void {
    this.isLoading=true;
    this.getBlogs();
    this.isLoading=false;
    this.initiated = true;
  }
  // getinit(){
  //   return this.initiated;
  // }
  getBlogs() {
    this.prof.getBlogsbyId().pipe(takeUntil(this.untilDestroyed$)).subscribe(res => {
      this.blogs = res;
      console.log(res);
      this.error = {};
    },
      error => {
        error = error;
        console.log(error);
      });
   

  }

  onEdit()
  {
    this.route.navigateByUrl("/editprofile");
  }

  onDelete()
  {

  }

}
