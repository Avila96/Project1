import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { BehaviorSubject,Subject,Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({ providedIn: "root" })

export class LoginAuthService {
  //
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }
  
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
//   private userId: string;
  //-----------global variable for storing customer user Id
  private full_name:string;
  private role:string;
  //private customerId:number;

  private UserAuthStatusListener = new Subject<boolean>();

  private url = 'https://api.bkconnect.knowhere-studio.dev/admin/login';


  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}

  getToken() {
    return     localStorage.getItem("token", );

  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.UserAuthStatusListener.asObservable();
  }


  login(mobile_number: string, password: string) {
    return this.http.post<any>(this.url, { mobile_number: mobile_number, password: password }, httpOptions)
        .pipe(map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }));
       
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
