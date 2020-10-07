import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

import { Song } from '../models/song';



@Injectable({
  providedIn: 'root'
})
export class SongService {

  private baseUrl = 'https://api.bkconnect.knowhere-studio.dev/admin';

  constructor(
    private http: HttpClient
  ) { }

  getSongs(): Observable<Song[]>{
    return this.http.get<Song[]>(this.baseUrl+'/song', {
      headers: new HttpHeaders({'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjdjMTgyODE1OGRhZTI1NzA2ZGYyMmUiLCJpYXQiOjE2MDE5NzY3NjEsImV4cCI6MTYwMjIzNTk2MX0.qyRSJ_Y8CFW69VBkd3pCwSyY7HT2hMeUKCa1dPglegk'
      })
    }) 
  }
}
