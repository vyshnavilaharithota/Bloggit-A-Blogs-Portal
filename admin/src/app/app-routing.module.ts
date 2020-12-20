import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { TagsListComponent } from './tags-list/tags-list.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';

const routes: Routes = [
  {path:"allusers",component:UsersListComponent, canActivate:[LoginService]},
  {path:"alltags",component:TagsListComponent, canActivate:[LoginService]},
  {path:"login",component:LoginComponent},
  {path:"",pathMatch:"full",component:TagsListComponent, canActivate:[LoginService]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
