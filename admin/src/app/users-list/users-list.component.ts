import { Component, OnInit } from '@angular/core';
import { UsersListService } from './users-list.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private usersListService:UsersListService) { }
  users:any;
  isLoading:boolean;
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers()
  {
    this.usersListService.getUsers().subscribe(res=>{
      // console.log(res);
      this.users=res;
    },err=>{
      console.log(err);
    });
  }

  onDeleteUser(userId)
  {
    if(!confirm("Are you sure..."))
    {
      return;
    }
    console.log(userId);
    this.isLoading=true;
    this.usersListService.onDeleteUser(userId).subscribe(res=>{
      this.isLoading=false;
      this.getUsers();
      alert("User deleted successfully with id "+userId);
    },err=>{
      console.log(err);
    });
  }
  

}
