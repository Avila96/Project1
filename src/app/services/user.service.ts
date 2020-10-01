import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

@Injectable()
export class UserService {
     constructor(private http: HttpClient) { }

 
    register (user: User): Observable<number> {
      return this.http.post<number>("https://api.bkconnect.knowhere-studio.dev/admin/register", user, httpOptions);
    }

     update(user: User) {
        return this.http.put(`/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`/users/` + id);
    }
}