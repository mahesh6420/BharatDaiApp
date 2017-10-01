// import { MediaPlugin } from "@ionic/native";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainApiService } from '../../services/services';
import { StreamingMedia,StreamingAudioOptions } from '@ionic-native/streaming-media';
import {Storage} from '@ionic/storage'



/**
 * Generated class for the MusicPlaying page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-music-playing',
  templateUrl: 'music-playing.html',
})
export class MusicPlaying {
  Title ="Music List";
  allTracks:any=[];
  trackstoreddata:any;
  constructor(public navCtrl: NavController,
     private musicApi: MainApiService,
    private streamingMedia: StreamingMedia,
  private storage:Storage) {
   
  }
 
  ionViewDidLoad() {

  }

 play(track,trackIndex){
 let option: StreamingAudioOptions = {
   bgColor:'#2d636b',
  // bgImage: track.art,
  // initFullscreen: false
 }
  this.streamingMedia.playAudio(track.src,option);
 }

 dbsave(){
  this.trackstoreddata = {
    tracks: this.musicApi.bmusic
    }

  this.storage.set("trackStoredData",this.trackstoreddata);
 }

    
}
