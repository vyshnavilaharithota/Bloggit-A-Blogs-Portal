import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AllBlogsService } from '../all-blogs/all-blogs.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  blog:any;
  error:any;
  resarray:any;
  constructor(private route:ActivatedRoute,private allblogs:AllBlogsService, private router:Router) { }
  id:any;
  ngOnInit(): void {
    
    this.route.params.subscribe(params =>{
      this.id=params['id'];
    });
   
    console.log(this.id);
    this.getBlogbyid();
  }

  getBlogbyid(){
    this.allblogs.getBlogs().subscribe(res =>{
    
      this.resarray=res;
      this.blog=this.resarray.find(obj => obj.id==this.id);
      console.log(this.blog);
      this.error={};
    },
    error=>{
      error=error;
      console.log(error);
    });
  }
  
  getNextBlogbyid(){
    this.allblogs.getBlogs().subscribe(res =>{
    
      this.resarray=res;
      
      this.blog=this.resarray.find(obj=>obj.id>this.id);
      this.router.navigate(['/blog', this.blog.id]);
      console.log(this.blog);
      this.error={};
    },
    error=>{
      error=error;
      console.log(error);
    });
  }
  

}
