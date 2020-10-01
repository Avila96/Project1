import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { LoginAuthService } from './login-auth.service'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

// Make the browser deal with json datatype
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 
  //'Authorization': 'Bearer ${token}'
  'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjcyYzVlM2E3YjVjNjUxNDIzMjA3YzEiLCJpYXQiOjE2MDE1MjcwNjgsImV4cCI6MTYwMTc4NjI2OH0.tg7hAfKiGIIb3VWCoNt_6-xm6hF-m10f_HCZWJqAfXM'
   })
  
};

@Injectable({
  providedIn: 'root'
})
export class UploadImagesService {
  private baseUrl = 'https://api.bkconnect.knowhere-studio.dev/admin/media/';
  private url = 'https://9ef465d45e39.ngrok.io';
  private sampleurl = 'https://us-central1-tutorial-e6ea7.cloudfunctions.net/fileUpload';

  //
  //SERVER_URL: string = "https://file.io/"; 

  constructor(
    private http: HttpClient,
    private router: Router,
    private loginauth: LoginAuthService
  ) { }

  //
  public upload(formData) {
    console.log("Errror?");
    return this.http.post<any>(this.sampleurl, formData
      );  
  }
  //\

  // {
  //   reportProgress: true,
  //   observe: 'events' ,  
  // }

}
