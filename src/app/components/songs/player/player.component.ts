import { Component, OnInit } from '@angular/core';
import { AudioService } from "../../../services/audio.service";
import { CloudService } from "../../../services/cloud.service";
import { StreamState } from "../../../interfaces/stream-state";
import { Song }  from '../../../models/song';


@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss']
  })

  export class PLayerComponent implements OnInit {
    files: Array<any> = [];
  state: StreamState;
  currentFile: any = {};
  arrayOfSongs: Song[];
    
  
    constructor(
        public audioService: AudioService,
        public cloudService: CloudService
     
    ) { 
    //    // get media files
    // cloudService.getFiles().subscribe(files => {
    //   this.files = files;
    // });

    //get all
    this.cloudService.getSongs()
    .subscribe(result=>{
      console.log(result);
      //@ts-ignore
      this.arrayOfSongs = result.result.data;
      console.log(this.arrayOfSongs);
    })
    // listen to stream state
    this.audioService.getState().subscribe(state => {
      this.state = state;
    });
  }
    
  
    ngOnInit(): void {
    
    }

    playStream(s3_url) {
      this.audioService.playStream(s3_url).subscribe(events => {
        // listening for fun here
      });
    }

      openFile(song, index) {
    this.currentFile = { index, song };
    this.audioService.stop();
    this.playStream(song.media.s3_url);
  }
  pause() {
    this.audioService.pause();
  }

      play() {
    this.audioService.play();
  }
  stop() {
    this.audioService.stop();
  }
  next() {
    const index = this.currentFile.index + 1;
    const song = this.arrayOfSongs[index];
    this.openFile(song, index);
  }
  previous() {
    const index = this.currentFile.index - 1;
    const song = this.arrayOfSongs[index];
    this.openFile(song, index);
  }
  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.arrayOfSongs.length - 1;
  }
  onSliderChangeEnd(change) {
    this.audioService.seekTo(change.value);
  }

  }