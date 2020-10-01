import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject,Observable } from "rxjs";
import { User } from '../models/user';

@Injectable({ providedIn: "root" })
export class LoginAuthService {
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
//   private userId: string;
  //-----------global variable for storing customer user Id
  private full_name:string;
  private role:string;
  //private customerId:number;

  private UserAuthStatusListener = new Subject<boolean>();

  private url = 'https://api.bkconnect.knowhere-studio.dev/admin/login';
  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    return     localStorage.getItem("token", );

  }

  getIsAuth() {
    return this.isAuthenticated;
  }

//   getUserId() {
//     return this.userId;
//   }

  getAuthStatusListener() {
    return this.UserAuthStatusListener.asObservable();
  }

  login(mobile_number: string, password: string){
    const authData = { mobile_number: mobile_number, password: password };
    this.http.post<{ mobile_number:string; full_name :string; role: string; profile_image: string, token: string; expiresIn: number; authData }>(
        this.url,authData)
      .subscribe(response => {
        const token = response.token;
        this.token = token;
        if (token) {
          console.log(token);
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.role=response.role;
          this.full_name=response.full_name;
          this.UserAuthStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(
            now.getTime() + expiresInDuration * 1000
          );
          console.log(expirationDate);
          console.log(response.role);
          console.log(response.full_name);
          console.log(response.mobile_number);
          this.saveAuthData(token, response.mobile_number, expirationDate, this.role, response.full_name, response.profile_image);
        }
      }, error => {
        this.UserAuthStatusListener.next(false);
        alert(
          "Invalid Mobile Number or Password \n" +
          "Enter Valid Mobile Number Id or Password "
          );
      });
  }


  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.role = authInformation.role;
      this.setAuthTimer(expiresIn / 1000);
      this.UserAuthStatusListener.next(true);
    }
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.UserAuthStatusListener.next(false);
    this.role = null;
    clearTimeout(this.tokenTimer);
    this.clearAuthData();

    this.router.navigate(["/"]);

  }

  private setAuthTimer(duration: number) {
    console.log("Setting timer: " + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, mobile_number:string,expirationDate: Date, full_name: string, role:string, profile_image:string) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
    localStorage.setItem("full_name", full_name);
    localStorage.setItem("mobile_number", mobile_number);
    localStorage.setItem("role", JSON.stringify(role));
    localStorage.setItem("profile_image", profile_image);
   }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("full_name");
    localStorage.removeItem("profile_image");
    localStorage.removeItem("role");
  
  }
  //----provides customerUserId of current logged In user[returns String]
  getUserName(){
    return localStorage.getItem("full_name"); 
  }

  //----provides customerUserRole of current logged In user[returns String]
  getUserRole() {
    return localStorage.getItem("role");
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    const role = localStorage.getItem("role");
    const first_name = localStorage.getItem("first_name");

    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      role : role 
    };
  }
}
