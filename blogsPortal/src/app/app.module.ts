import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import {EditorModule} from 'primeng/editor';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { BlogComponent } from './blog/blog.component';
import { ProfileComponent } from './profile/profile.component';
import { Blog1Component } from './blog1/blog1.component';
import { PostComponent } from './post/post.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReadComponent } from './read/read.component';
import { EditComponent } from './edit/edit.component';
import { TagViewComponent } from './tag-view/tag-view.component';
import { LoaderComponent } from './loader/loader.component';
import { TagSelectComponent } from './tag-select/tag-select.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ResetComponent } from './reset/reset.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ChatAppComponent } from "./components/chat-app/chat-app.component";
import { ChatWindowComponent } from "./components/chat-window/chat-window.component";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { MessageComponent } from "./components/message/message.component";
import { ChatInputComponent } from "./components/chat-input/chat-input.component";

import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";
import { ChatNamePopupComponent } from './components/chat-name-popup/chat-name-popup.component';

const config: SocketIoConfig = { url: "https://bloggit-chat.herokuapp.com/", options: {} };

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    SignupComponent,
    SearchComponent,
    HomeComponent,
    AllBlogsComponent,
    BlogComponent,
    ProfileComponent,
    Blog1Component,
    PostComponent,
    ReadComponent,
    EditComponent,
    TagViewComponent,
    LoaderComponent,
    TagSelectComponent,
    EditProfileComponent,
    ResetComponent,
    ForgotPasswordComponent,
    ForgotComponent,
    ChatAppComponent,
    ChatWindowComponent,
    UsersListComponent,
    MessageComponent,
    ChatInputComponent,
    ChatNamePopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule,
    HttpClientModule,
    FormsModule,
    CKEditorModule,
    EditorModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
