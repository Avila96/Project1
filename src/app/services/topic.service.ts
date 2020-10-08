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
      headers: new HttpHeaders({'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjU2NDk1MWFiNTg0ZDRiMDAzYzgzMjAiLCJpYXQiOjE2MDIxNDQ5ODUsImV4cCI6MTYwMjQwNDE4NX0.zMri7V1tNlUSp9DQ1Qf7HWBRIik6jD5yzwV11ZqykzY'
     
      })
    })    
   }
}
