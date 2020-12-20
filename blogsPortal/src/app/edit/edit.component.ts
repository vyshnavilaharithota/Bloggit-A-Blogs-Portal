import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllBlogsService } from '../all-blogs/all-blogs.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as M from 'materialize-css/dist/js/materialize.min';
import { NgForm } from '@angular/forms';
import { PostService } from '../post/post.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private http: HttpClient,private route:ActivatedRoute,private allblogs:AllBlogsService, private ps:PostService, private cdrf: ChangeDetectorRef) { }
  id:any;
  blog:any;
  tags:any;
  public formData: FormData;
  public selectedFile: File=null;
  error:any;
  resarray:any;
  imgURL;
  public Editor = ClassicEditor;
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    
    this.getBlogbyid();
    this.getTags();
  }
  
  getTags() {
    this.http.get(environment.baseUrl+"api/alltags").subscribe(res => {
      console.log(res);
      this.tags=res;
      this.cdrf.detectChanges();
      var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
    }, err => {
      console.log(err);
    })
  }

  getBlogbyid(){
    this.allblogs.getBlogs().subscribe(res =>{
      this.resarray=res;
      this.blog=this.resarray.find(obj=>obj.id==this.id);
      console.log(this.blog);
      this.error={};
    },
    error=>{
      error=error;
      console.log(error);
    });
  }

  onPut(post:NgForm)
  {
    let res=JSON.parse(localStorage.getItem('res'));
    // let uid=res[0].id;
    this.formData=new FormData();
   
    let obj={
      title:post.value.title,
      body:post.value.body,
      tag:post.value.tag,
      
    }
    for ( let key in obj ) {
      this.formData.append(key, obj[key]);
  }
 
    this.ps.onPut(this.formData, this.id);
  }
}
