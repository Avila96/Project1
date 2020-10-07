import { Component, OnInit } from '@angular/core';
import { Song } from '../../../models/song';
import { SongService } from '../../../services/song.service';

@Component({
  selector: 'app-list-of-songs',
  templateUrl: './list-of-songs.component.html',
  styleUrls: ['./list-of-songs.component.css']
})
export class ListOfSongsComponent implements OnInit {
  arrayOfSongs: Song[];

  constructor(
    private songService: SongService
  ) { }

  ngOnInit(): void {
    this.songService.getSongs()
    .subscribe(
      result =>{
        console.log(result);
        //@ts-ignore
        this.arrayOfSongs = result.result.data
      }
    )
  }

}
