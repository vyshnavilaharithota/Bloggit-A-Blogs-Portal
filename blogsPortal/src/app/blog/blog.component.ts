import { Component, OnInit, Input } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize.min';
import { NavigationEnd, Router } from '@angular/router';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  @Input() options: any;
  link: string;
  uname: string;
  isLiked: boolean;
  constructor(private router: Router, private bs: BlogService) {

  }

  ngOnInit(): void {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
    this.link = "#" + this.options.id;
    console.log(this.options.id);
    this.getUsername(this.options.user_id);
  }
  getUsername(id) {
    this.bs.getUsername(id).subscribe(res => {
      console.log(res);
      this.uname = res[0].name;
    }, error => {
      console.log(error);
    });
  }

  onRead(id) {
    this.router.navigate(['/blog', id])
  }

  onLike() {
    if (this.isLiked) {
      this.bs.onDislike(this.options).subscribe(res => {
        this.options.likes = res['likes'];
        this.isLiked = false;
        console.log(res);
      }, err => {
        console.log(err);
      });
    }
    else {
      this.bs.onLike(this.options).subscribe(res => {
        this.options.likes = res['likes'];
        this.isLiked = true;
        console.log(res);
      }, err => {
        console.log(err);
      });
    }
  }
}
