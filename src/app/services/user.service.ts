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
      headers: new HttpHeaders({'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjdjMTgyODE1OGRhZTI1NzA2ZGYyMmUiLCJpYXQiOjE2MDE5NzY3NjEsImV4cCI6MTYwMjIzNTk2MX0.qyRSJ_Y8CFW69VBkd3pCwSyY7HT2hMeUKCa1dPglegk'})
    })    
   }

   getAdmin (): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl, {
      headers: new HttpHeaders({'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjdjMTgyODE1OGRhZTI1NzA2ZGYyMmUiLCJpYXQiOjE2MDE5NzY3NjEsImV4cCI6MTYwMjIzNTk2MX0.qyRSJ_Y8CFW69VBkd3pCwSyY7HT2hMeUKCa1dPglegk'
     
      })
    })    
   }
  
  //get admin by id
   getAdminById(id: string) : Observable<User>{
    const url=`${this.baseUrl}/${id}`
   return this.http.get<User>(url+'/profile', 
   {
      headers: new HttpHeaders({'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjdjMTgyODE1OGRhZTI1NzA2ZGYyMmUiLCJpYXQiOjE2MDE5NzY3NjEsImV4cCI6MTYwMjIzNTk2MX0.qyRSJ_Y8CFW69VBkd3pCwSyY7HT2hMeUKCa1dPglegk'
      // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjcyYzVlM2E3YjVjNjUxNDIzMjA3YzEiLCJpYXQiOjE2MDE4NzczNzMsImV4cCI6MTYwMjEzNjU3M30.-1_02tRegW8DMFtz389JaM1V2pb8b-ee5lb-tjSXLUY'
    })
    });
   }
 
   //get user by id
   getUserById(id: string) : Observable<User>{
    const url=`${this.userUrl}/${id}`;
    return this.http.get<User>(url+'/profile', 
   {
      headers: new HttpHeaders({'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjY4NTVhOGNkYjU3ZTE1MGRjYzFjOTMiLCJpYXQiOjE2MDE5MDU1MjcsImV4cCI6MTYwMjE2NDcyN30.A8wtKC9zrjtgk-YDH4Xi-pXnJLIJoNFG0JZ6shGf1VU',
                                  
    })
    });
   }

}