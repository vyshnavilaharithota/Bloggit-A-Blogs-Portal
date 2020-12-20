import { Component, OnInit } from '@angular/core';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { TagsListService } from './tags-list.service';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
// import { NgForm } from ''

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.css']
})
export class TagsListComponent implements OnInit {
  tags: any;
  public selectedFile: File;
  public imgURL;
  public formData: FormData;
  public img: String = environment.baseUrl;

  constructor(private tagsListService: TagsListService) { }

  ngOnInit(): void {
    this.getTags();
  }
  createTag(tags: NgForm) {
    this.formData = new FormData();

    let obj = {
      tags: tags.value.tags

    }
    for (let key in obj) {
      this.formData.append(key, obj[key]);
    }
    this.formData.append("photo", this.selectedFile, this.selectedFile.name);


    this.tagsListService.createTag(this.formData).subscribe(res => {
      console.log(res);
      this.getTags();
    }, err => {
      console.log(err);
    });
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
    this.tagsListService.getTags().subscribe(res => {
      console.log(res);
      this.tags = res;
    }, err => {
      console.log(err);
    });
  }



}
