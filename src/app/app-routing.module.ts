import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { ImageUploadComponent } from './components/image-upload/image-upload.component'
import { UsersComponent } from './components/User/list-of-users/list-of-users.component';
import { AdminComponent } from './components/Admin/listOfAdmins/listOfAdmins.component';
import { ViewAdminDetailComponent } from './components/Admin/view-admin-detail/view-admin-detail.component';
import { ViewUserDetailComponent } from './components/User/view-user-detail/view-user-detail.component';
import { ListOfTopicsComponent } from './components/Topics/list-of-topics/list-of-topics.component';
import { ListOfSongsComponent } from './components/songs/list-of-songs/list-of-songs.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/:id',
    component: ViewUserDetailComponent
  },
  {
    path: 'admins',
    component: AdminComponent
  },
  {
    path: 'admins/:id',
    component: ViewAdminDetailComponent
  },
  {
    path: 'topics',
    component: ListOfTopicsComponent
  },
  {
    path: 'songs',
    component: ListOfSongsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'imageupload',
    component: ImageUploadComponent,
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
