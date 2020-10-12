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
      headers: new HttpHeaders({'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjU2NDk1MWFiNTg0ZDRiMDAzYzgzMjAiLCJpYXQiOjE2MDI0ODM1MDAsImV4cCI6MTYwMjc0MjcwMH0.BQUAsXaXfqb2q3Hb5BNn1C3sba-sX4M3R71PbGwGBak'
      })
    }) 
  }
}
