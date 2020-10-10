import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
// Import Song Module 
import {Song } from '../models/song';

@Injectable({
  providedIn: "root"
})
export class CloudService {
  songs : Song[];

  private baseUrl = 'https://api.bkconnect.knowhere-studio.dev/admin';
  
  constructor(
    private http: HttpClient
  ) { }

  // Get all Songs
  getSongs(): Observable<Song[]>{
    return this.http.get<Song[]>(this.baseUrl+'/song', {
      headers: new HttpHeaders({'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjU2NDk1MWFiNTg0ZDRiMDAzYzgzMjAiLCJpYXQiOjE2MDIxNDQ5ODUsImV4cCI6MTYwMjQwNDE4NX0.zMri7V1tNlUSp9DQ1Qf7HWBRIik6jD5yzwV11ZqykzY'
      })
    }) 
  }

  
}