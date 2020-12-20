import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NgForm } from '@angular/forms';
import { templateJitUrl } from '@angular/compiler';
import { PostService } from './post.service';
import * as M from 'materialize-css/dist/js/materialize.min';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public Editor = ClassicEditor;
  public selectedFile: File;
  public imgURL;
  public tags;
  public formData: FormData;
  public model = {
    editorData: ''
  };
  constructor(private ps: PostService, private crdf: ChangeDetectorRef) {

  }

  ngOnInit(): void {

    this.getTags();
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});

  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];

    console.log(this.selectedFile);
    let reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }


  }

  getTags() {
    this.ps.getTags().subscribe(res => {
      console.log(res);
      this.tags = res;
      this.crdf.detectChanges();
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems, {});
    }, err => {
      console.error(err);
    });
  }

  onPost(post: NgForm) {
    let res = JSON.parse(localStorage.getItem('res'));
    let uid = res[0].id;
    this.formData = new FormData();

    let obj = {
      title: post.value.title,
      body: post.value.body,
      likes: 0,
      tag: post.value.tag,

    }
    for (let key in obj) {
      this.formData.append(key, obj[key]);
    }
    this.formData.append("photo", this.selectedFile, this.selectedFile.name);
    this.formData.append("user_id", uid);

    console.log(this.formData);
    this.ps.onPost(this.formData);
  }

}
