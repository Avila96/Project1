import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const token = localStorage.token;
const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    Authorization: `token`,
  };

@Injectable()
export class UserService {
  private baseUrl =  'https://api.bkconnect.knowhere-studio.dev/admin';  // URL to web api

     constructor(private http: HttpClient) { }

 
    register (user: User): Observable<number> {
      return this.http.post<number>("https://api.bkconnect.knowhere-studio.dev/admin/register", user, httpOptions);
    }
     // get multiple user(Rn)----------------------------------------------------------------------------------------
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl+ '/users', {
      headers: new HttpHeaders({'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjcyYzVlM2E3YjVjNjUxNDIzMjA3YzEiLCJpYXQiOjE2MDE1MjcwNjgsImV4cCI6MTYwMTc4NjI2OH0.tg7hAfKiGIIb3VWCoNt_6-xm6hF-m10f_HCZWJqAfXM'})
    })    
   }

   getAdmin (): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl, {
      headers: new HttpHeaders({'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjcyYzVlM2E3YjVjNjUxNDIzMjA3YzEiLCJpYXQiOjE2MDE1MjcwNjgsImV4cCI6MTYwMTc4NjI2OH0.tg7hAfKiGIIb3VWCoNt_6-xm6hF-m10f_HCZWJqAfXM'})
    })    
   }
  
  //get user by id
   getUserById(id: string) : Observable<User>{
     const url=`${this.baseUrl}/${id}`;
    return this.http.get<User>(url, {
      headers: new HttpHeaders({'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjcyYzVlM2E3YjVjNjUxNDIzMjA3YzEiLCJpYXQiOjE2MDE1MjcwNjgsImV4cCI6MTYwMTc4NjI2OH0.tg7hAfKiGIIb3VWCoNt_6-xm6hF-m10f_HCZWJqAfXM'})
    });
   }
 

}