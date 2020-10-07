import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic }  from '../models/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private baseUrl =  'https://api.bkconnect.knowhere-studio.dev/admin'; 


  constructor(
    private http : HttpClient
  ) { }

  getTopics (): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.baseUrl+'/topic/?current_page=1', {
      headers: new HttpHeaders({'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjdjMTgyODE1OGRhZTI1NzA2ZGYyMmUiLCJpYXQiOjE2MDE5NzY3NjEsImV4cCI6MTYwMjIzNTk2MX0.qyRSJ_Y8CFW69VBkd3pCwSyY7HT2hMeUKCa1dPglegk'
     
      })
    })    
   }
}
