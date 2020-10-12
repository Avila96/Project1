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
      headers: new HttpHeaders({'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjU2NDk1MWFiNTg0ZDRiMDAzYzgzMjAiLCJpYXQiOjE2MDI0ODM1MDAsImV4cCI6MTYwMjc0MjcwMH0.BQUAsXaXfqb2q3Hb5BNn1C3sba-sX4M3R71PbGwGBak'
     
      })
    })    
   }
}
