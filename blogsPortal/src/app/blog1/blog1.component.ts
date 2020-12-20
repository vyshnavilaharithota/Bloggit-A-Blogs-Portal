import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-blog1',
  templateUrl: './blog1.component.html',
  styleUrls: ['./blog1.component.css']
})
export class Blog1Component implements OnInit {
  urlPath: String= environment.baseUrl;

  @Input() options:any;
  
  constructor(private router:Router,private ps:ProfileService) { }


  ngOnInit(): void {
  }
  onEdit()
  {
    this.router.navigate(['/edit',this.options.id]);
  }

  onDelete()
  {
    if(!confirm("Are you sure..."))
      return;
    this.ps.onDelete(this.options.id).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("/");
    },
    error=>{
      console.log(error);
    });
  }
}
