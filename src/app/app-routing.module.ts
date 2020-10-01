import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { ImageUploadComponent } from './components/image-upload/image-upload.component'

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { 
    path: 'login',
     component: LoginComponent,   },
  { path: 'register', component: RegisterComponent },
  
  { 
    path: 'home', 
    component: HomeComponent },
 
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
