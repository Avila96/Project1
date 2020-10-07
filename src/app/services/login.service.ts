import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';
import {catchError, tap} from 'rxjs/internal/operators';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private role: string;
  token: string;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  private url = 'https://api.bkconnect.knowhere-studio.dev/admin/login';
  
  constructor(private http: HttpClient) { }

  getToken() {
    return     localStorage.getItem("token");
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
  getUserRole() {
    return localStorage.getItem("role");
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
  }
}
