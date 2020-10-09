import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import {Song } from '../models/song';

@Injectable({
  providedIn: "root"
})
export class CloudService {
  songs : Song[];

  private baseUrl = 'https://api.bkconnect.knowhere-studio.dev/admin';
  files: any = [
    // tslint:disable-next-line: max-line-length
    {
      url:
        "https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3",
      name: "Perfect",
      artist: " Ed Sheeran"
    },
    {
      // tslint:disable-next-line: max-line-length
      url:
        "https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3",
      name: "Man Atkeya Beparwah",
      artist: "Nusrat Fateh Ali Khan"
    },
    {
      url:
        "https://ia801503.us.archive.org/15/items/TheBeatlesPennyLane_201805/The%20Beatles%20-%20Penny%20Lane.mp3",
      name: "Penny Lane",
      artist: "The Beatles"
    }
  ];
  constructor(
    private http: HttpClient
  ) { }

  getSongs(): Observable<Song[]>{
    return this.http.get<Song[]>(this.baseUrl+'/song', {
      headers: new HttpHeaders({'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjU2NDk1MWFiNTg0ZDRiMDAzYzgzMjAiLCJpYXQiOjE2MDIxNDQ5ODUsImV4cCI6MTYwMjQwNDE4NX0.zMri7V1tNlUSp9DQ1Qf7HWBRIik6jD5yzwV11ZqykzY'
      })
    }) 
  }

  getFiles() {
    return of(this.files);
  }

  // getSongs() {
  //   return of(this.songs);
  // }
}