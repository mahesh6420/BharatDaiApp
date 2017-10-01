import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AudioProvider } from 'ionic-audio';

@Injectable()
export class AudioService {
  currentTrack: any;
  currentTrackNumber: number = 0;
  isPlaying: Boolean = false;

  constructor(public http: Http, public audioProvider: AudioProvider) {
    console.log('Hello PodcastService Provider');
  }

  playPauseCurrentTrack() {
    if (this.isPlaying) {
      this.audioProvider.tracks[this.currentTrackNumber].pause();
      this.isPlaying = false;
    } else {
      // play first track if none was playing
      this.audioProvider.tracks[this.currentTrackNumber].play();
      this.isPlaying = true;
    }
  }

  playTrack(track) {
    if (this.isPlaying) {
      // stop current track
      this.audioProvider.tracks[this.currentTrackNumber].stop();
      this.isPlaying = false;
    }
    // wipe track list
    this.audioProvider.tracks = [];
    // insert new track
    this.audioProvider.add(this.audioProvider.create(track));
    this.currentTrackNumber = 0;
    this.currentTrack = this.audioProvider.tracks[this.currentTrackNumber];
    // play new track
    this.audioProvider.tracks[this.currentTrackNumber].play();
    // flag isPlaying
    this.isPlaying = true;
  }
}