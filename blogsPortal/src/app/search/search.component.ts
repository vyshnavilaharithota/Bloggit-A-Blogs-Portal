import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { SearchService } from './search.service';
import { AllBlogsService } from '../all-blogs/all-blogs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  name:any;
  constructor(private searchservice:SearchService,private allblogs:AllBlogsService) { }
  // @Output() tag = new EventEmitter;
  ngOnInit(): void {
    // this.tags.emit('animal');
  }
  onSearch()
  {
    // this.allblogs.filterItem(this.name);
    // this.tag.emit(this.name);
  }
}
