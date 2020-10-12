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
  private baseUrl =  'https://api.bkconnect.knowhere-studio.dev/admin';  // URL to web api/user/:user_id/profile
  private userUrl =  'https://api.bkconnect.knowhere-studio.dev/user';

     constructor(private http: HttpClient) { }

 
    register (user: User): Observable<number> {
      return this.http.post<number>("https://api.bkconnect.knowhere-studio.dev/admin/register", user, httpOptions);
    }
     // get multiple user(Rn)----------------------------------------------------------------------------------------
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl+ '/users', {
      headers: new HttpHeaders({'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjU2NDk1MWFiNTg0ZDRiMDAzYzgzMjAiLCJpYXQiOjE2MDI0ODM1MDAsImV4cCI6MTYwMjc0MjcwMH0.BQUAsXaXfqb2q3Hb5BNn1C3sba-sX4M3R71PbGwGBak'})
    })    
   }

   getAdmin (): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl, {
      headers: new HttpHeaders({'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjU2NDk1MWFiNTg0ZDRiMDAzYzgzMjAiLCJpYXQiOjE2MDI0ODM1MDAsImV4cCI6MTYwMjc0MjcwMH0.BQUAsXaXfqb2q3Hb5BNn1C3sba-sX4M3R71PbGwGBak'
     
      })
    })    
   }
  
  //get admin by id
   getAdminById(id: string) : Observable<User>{
    const url=`${this.baseUrl}/${id}`
   return this.http.get<User>(url+'/profile', 
   {
      headers: new HttpHeaders({'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjU2NDk1MWFiNTg0ZDRiMDAzYzgzMjAiLCJpYXQiOjE2MDI0ODM1MDAsImV4cCI6MTYwMjc0MjcwMH0.BQUAsXaXfqb2q3Hb5BNn1C3sba-sX4M3R71PbGwGBak'
      
    })
    });
   }
 
   //get user by id
   getUserById(id: string) : Observable<User>{
    const url=`${this.userUrl}/${id}`;
    return this.http.get<User>(url+'/profile', 
   {
      headers: new HttpHeaders({'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjU2NDk1MWFiNTg0ZDRiMDAzYzgzMjAiLCJpYXQiOjE2MDI0ODM1MDAsImV4cCI6MTYwMjc0MjcwMH0.BQUAsXaXfqb2q3Hb5BNn1C3sba-sX4M3R71PbGwGBak',
                                  
    })
    });
   }

}