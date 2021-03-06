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
import { PLayerComponent } from './components/songs/player/player.component';

// @NgModule({
//   imports: [
//     RouterModule.forChild(adminRoutes)
//   ],





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
    component: UsersComponent,
    // canActivate : [AuthGuard]
  },
  {
    path: 'users/:id',
    component: ViewUserDetailComponent
  },
  {
    path: 'admins',
    component: AdminComponent,
    // canActivate : [AuthGuard]
  },
  {
    path: 'admins/:id',
    component: ViewAdminDetailComponent
  },
  {
    path: 'topics',
    component: ListOfTopicsComponent,
    // canActivate : [AuthGuard]
  },
  {
    path: 'songs',
    component: ListOfSongsComponent
  },
  {
    path: 'player',
    component: PLayerComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate : [AuthGuard]
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
