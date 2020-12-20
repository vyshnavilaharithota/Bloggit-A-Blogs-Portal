import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllBlogsService } from './all-blogs.service';
import { SearchService } from '../search/search.service';
import { formatDate } from '@angular/common';
import * as M from 'materialize-css/dist/js/materialize.min';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css']
})
export class AllBlogsComponent implements OnInit {
  blogs: any = [];
  urlPath:String=environment.baseUrl;
  error: any;
  name: any;
  tags: any;
  tagsFinal:any;
  isLoading:boolean;
  checkSort: boolean;
  checkStart: boolean;
  filteredItems;
  filterDate:any;
  blogscopy:any;
  blogscopyy:any;
  constructor(private router: Router, private allblogs: AllBlogsService, private search: SearchService, private crdf: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getTags();
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {});
    window.addEventListener('storage', (event) => {
      if (event.storageArea == localStorage) {
        let token = localStorage.getItem('res');
        if (token == undefined) {
          this.router.navigate(['/home']);
        }
      }
    }, false);
    this.isLoading=true;
    this.getBlogs();
    this.tagRecommendation();
    
    this.isLoading=false;

  }


  filterblogsbytagrecom() {
  
    this.blogscopy = Object.assign([], this.blogs).filter(
     
      item => {
        let flag=false;
        for(let i=0;i<this.tags.length-1;i++)
        {
         
          if((item.tag.toLowerCase().indexOf(this.tags[i].toLowerCase()) > -1) )
          {
            flag=true;
          }
        }
        return flag;
      }
    )
    // console.log(this.blogscopy);
   this.blogscopyy=this.blogscopy;
   this.blogscopy=this.blogscopyy.slice(0,3);
  }

  getBlogs() {
    this.allblogs.getBlogs().subscribe(res => {
      this.blogs = res;

      // console.log(res);
      this.filteredItems = Object.assign([], this.blogs);
      this.error = {};
    },
      error => {
        error = error;
        console.log(error);
      });
  }

  assignCopy() {
    this.filteredItems = Object.assign([], this.blogs);
    // console.log(this.blogs);
    // console.log(this.filteredItems);
  }

  filterItem(value) {
    if (!value) {
      this.assignCopy();
    } // when nothing has typed
    this.filteredItems = Object.assign([], this.blogs).filter(
      item => {
        return ((item.tag.toLowerCase().indexOf(value.toLowerCase()) > -1) || (item.title.toLowerCase().indexOf(value.toLowerCase()) > -1))
      }
    )
  }
  filterItemByDate() {
    if (!this.filterDate) {
      this.assignCopy();
    } // when nothing has typed
    this.filteredItems = Object.assign([], this.blogs).filter(
      item => {
        return formatDate(item.created_at,'shortDate','en-US')==formatDate(this.filterDate,'shortDate','en-US');
      }
    )
  }
  sort() {
    if (!this.checkSort)
      this.filterItem('');
    else {
      this.filteredItems.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
    }
  }
  sortStart() {
    if (!this.checkStart)
      this.filterItem('');
    else {
      this.filteredItems.sort((a, b) => (a.created_at > b.created_at) ? 1 : ((b.created_at > a.created_at) ? -1 : 0));
    }
  }

  tagRecommendation()
  {
    this.allblogs.tagRecommendation().subscribe(res=>{
      this.crdf.detectChanges();
      this.tags=(res[0].tag).split(',');
      this.filterblogsbytagrecom();
      // console.log(this.tags);
      console.log(res);
    },err=>{
      console.log(err);
    });
  }

  getTags() {
    this.allblogs.getTags().subscribe(res => {
      console.log(res);
      this.tagsFinal = res;
      this.crdf.detectChanges();
      
    }, err => {
      console.error(err);
    });
  }

}
