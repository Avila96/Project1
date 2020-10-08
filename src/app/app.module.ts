import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAudioPlayerModule } from 'ngx-audio-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from '././directives/alert.component';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guard/auth.guard';

import { AlertService } from './services/alert.service';
import { UserService } from './services/user.service';
import { LoginService } from './services/login.service';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { UsersComponent } from './components/User/list-of-users/list-of-users.component';
import { AdminComponent } from './components/Admin/listOfAdmins/listOfAdmins.component';
import { ViewAdminDetailComponent } from './components/Admin/view-admin-detail/view-admin-detail.component';
import { ViewUserDetailComponent } from './components/User/view-user-detail/view-user-detail.component';
import { ListOfTopicsComponent } from './components/Topics/list-of-topics/list-of-topics.component';
import { ListOfSongsComponent } from './components/songs/list-of-songs/list-of-songs.component';
import { PLayerComponent } from './components/songs/player/player.component';



@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ImageUploadComponent,
    UsersComponent,
    AdminComponent,
    ViewAdminDetailComponent,
    ViewUserDetailComponent,
    ListOfTopicsComponent,
    ListOfSongsComponent,
    PLayerComponent
  
   
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxAudioPlayerModule

  ],
  providers: [
    AuthGuard,
    AlertService,
    LoginService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
