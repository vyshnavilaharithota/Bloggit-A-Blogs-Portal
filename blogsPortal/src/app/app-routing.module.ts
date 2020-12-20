import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './login/auth.service';
import { ProfileComponent } from './profile/profile.component';
import { PostComponent } from './post/post.component';
import { ReadComponent } from './read/read.component';
import { EditComponent } from './edit/edit.component';
import { TagViewComponent } from './tag-view/tag-view.component';
import { TagSelectComponent } from './tag-select/tag-select.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ResetComponent } from './reset/reset.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ChatAppComponent } from './components/chat-app/chat-app.component';

const routes: Routes = [
  
  {path:'userhome' ,component:AllBlogsComponent,  canActivate: [AuthService] },
  {path:'home',component:HomeComponent},
  {path:'',component:AllBlogsComponent,pathMatch:'full', canActivate: [AuthService]},
  {path:'profile',component:ProfileComponent},
  {path:'post',component:PostComponent},
  {path:'blog/:id',component:ReadComponent},
  {path:'tag/:name',component:TagViewComponent},
  {path:'tagselect',component:TagSelectComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'reset',component:ResetComponent},
  {path:'editprofile',component:EditProfileComponent},
  {path:'editprofile',component:EditProfileComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
  {path:'forgot',component:ForgotComponent},
  {path:'chat',component:ChatAppComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
