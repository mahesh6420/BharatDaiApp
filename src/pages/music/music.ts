import { MusicControls } from '@ionic-native/music-controls';
import { MediaObject, Media } from '@ionic-native/media';
import * as firebase from 'firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
// import { AudioProvider, ITrackConstraint } from "ionic-audio";
import {Storage} from '@ionic/storage'
import { MainApiService } from "../../services/services";
//import { MusicPlaying } from "../pages";

import { ProgressBarComponent  } from '../../components/progress-bar/progress-bar'

@IonicPage()
@Component({
  selector: 'page-music',
  templateUrl: 'music.html',
})

export class MusicPage {
  Title = "Music List";
  tracks:any[];
  allTracks: any[]=this.musicApiService.bmusic;
  tracksAdded:any=false;
  selectedTrack: any = 0;
  playing:any;
 public audioFile:MediaObject;
 audioFile1:MediaObject;
  audiofile:any;
  duration:any;
   currentPosition:any;
   trackstoreddata:any;
  id:any;
 trackSelected:any;
  track:any;
  constructor(
    private musicApiService: MainApiService,
  //public _audioProvider: AudioProvider
    public musicMedia: Media,
    private storage: Storage,
    
  ){

  }

  ionViewDidLoad(){
    // this.storage.get("trackStoredData")
    //             .then((data)=>{
    //               this.playing = data.dataPlaying
    //             })
    this.loadMusic();

  }

  ionViewDidLeave(){
   this.stop('');
  }
  ionViewWillLeave(){
    this.stop('');
    console.log('from will leave');
   }

  loadMusic(){

   this.storage.get('trackStoredData').then(data=>{
     if(data==null){
       console.log('from laodmusic null')
       this.audioFile1 = this.musicMedia.create(this.musicApiService.bmusic[this.selectedTrack].src);
       return false;
     }
     else{
      console.log('from laodmusic else')

      this.playing = data.dataPlaying;
      this.selectedTrack = data.selectedtrack;
      this.trackSelected= data.trackselected;
      //this.audioFile =JSON.parse(data.audiofile)

      
      console.log('data.audiofile:'+data.audiofile)
      console.log('this.audioFile:'+this.audioFile)
    }

   })
    // if(this.allTracks == null){
    //   this.allTracks= this.musicApiService.bmusic;
    //   console.log(this.allTracks);
    //   this.tracksAdded = true;
    // }

  }

  check(track,trackIndex){
    console.log('from check')
    //playing or not
    if(this.playing==true){
      console.log('from check if')
      if(this.selectedTrack==trackIndex){
        console.log('from check if if ')
        if(this.audioFile1!=null){
          this.stop('audio1')
        }
        else{
          this.pause();
        }
       // this.pause();
      }
      else{
        console.log('from check if > else')
        // if(this.audioFile1!=null){
        //   this.stop('audio1')
        // }
        // else{
          this.stop('audio')
        //}
       
        this.audioFile = this.musicMedia.create(track);
        this.selectedTrack = trackIndex;
        this.track = track;
      this.trackSelected = true;
        this.play();
      }

    }
    else{
      console.log('from check else')
     // if(this.selectedTrack!=trackIndex){
        if(this.audioFile == null){
          this.audioFile = this.musicMedia.create(track);
        }
        this.selectedTrack = trackIndex;
        this.play();
     // }
     // else{
     //   console.log('from else else')
      //  this.pause();
     // }
    }

  }
  t
  async play(){
    console.log(this.audioFile);
    console.log('from play')
    if(this.playing==true){
      console.log('from play if')
      return false;
    }

    this.audioFile.play();
    this.audioFile.onStatusUpdate.subscribe(status=>
      this.audioFile.getCurrentPosition().then((position)=>{
        this.currentPosition = position/60;
      })
     );

    this.duration = this.audioFile.getDuration();
    this.audioFile.getCurrentPosition().then((position)=>{
      this.currentPosition = position/60;
    })
    this.playing = true;
    this.audioFile.onSuccess.subscribe(()=>{
      this.playing=false,
      this.next();
    });
    // this.audioFile.onStatusUpdate.subscribe(status => console.log(status));
   this.dbsave();
  }
  dbsave(){
  
    this.trackstoreddata = {
      dataPlaying:this.playing,
      tracks: this.musicApiService.bmusic,
      selectedtrack:this.selectedTrack,
      trackselected: this.trackSelected,
      }

    this.storage.set("trackStoredData",this.trackstoreddata);
    // this.audiofile = {
    //   audiofile: this.audioFile
    // }
    // this.nativeStorage.setItem("trackStoredData",this.trackstoreddata).then(
    //   error=>alert('error while storing'+error)
    // )
  }
  pause(){
    console.log('from pause')
    this.playing = false;
    this.audioFile.pause();
    this.dbsave();
  }
  stop(checkfile){
    // if(checkfile=='audio1'){
    //   console.log('from checkfile==audio1')
    //   this.audioFile = this.audioFile1;
    //   this.audioFile1=null;
    // }
    if(this.audioFile==null){
      console.log('from stop if')
      this.audioFile1 = this.musicMedia.create(this.musicApiService.bmusic[this.selectedTrack].src);
      this.audioFile= this.audioFile1
    }
   console.log('from stop')
    this.audioFile.stop();
    this.audioFile.release();
    this.playing = false;
    this.dbsave();
  }

  next(){
    
    if(this.selectedTrack == this.musicApiService.bmusic.length-1){
      return false;
    }
    this.selectedTrack = this.selectedTrack +1;
    this.audioFile = this.musicMedia.create( this.musicApiService.bmusic[this.selectedTrack].src);
    this.play();

  }
  prev(){
    this.stop('audio');
    if(this.selectedTrack == 0){
      return false;
    }
    this.selectedTrack = this.selectedTrack-1;
    this.audioFile = this.musicMedia.create(this.musicApiService.bmusic[this.selectedTrack].src);
    this.play();
  }
  // ngAfterContentInit(){
  //   this.allTracks = this._audioProvider.tracks;

  // }
  // playSelectedTrack(){
  //   this.selectedTrack = this.track;
  //   this._audioProvider.play(this.selectedTrack);

  // }
  // pauseSelectedTrack(){
  //   this._audioProvider.pause(this.selectedTrack);
  // }
  // onTrackFinished(track:any){
  //   alert('track finished/'+track);
  // }























  // myTracks: any;
  // allTracks: any;
  // playing: boolean = false;
  // initial: boolean = true;
  // currentMusic: any;
  // musicNumber:any = null;
  // status:any;
  // musicDuration: any;
  // currentPosition:any;
  // audio: MediaObject;
  // nullCurrentTrack: boolean = true;
  // paused:any;
  // constructor(public nav: NavController,
  //   public navParams: NavParams,
  //   private musicApi: MainApiService,
  //   private media: Media,
  //   private loadingController: LoadingController,
  //   private musicControls: MusicControls) {

  //   this.currentMusic = "";


  // }

  // ionViewDidLoad() {
  //   let loader = this.loadingController.create({
  //     content: 'Loading tracks...'
  //   });
  //   loader.present().then(() => {
  //     this.musicApi.getTracks().then(data =>
  //       this.allTracks = data);
  //       loader.dismiss();
  //   });

  //   //  for(var i=0;i<this.allTracks.length;i++){
  //   //    console.log(this.allTracks[i]);
  //   //  }

  // }

  // // musicPlayTapped($event, musicTrack) {
  // //   console.log("music play tabbed");
  // //   if (this.playing) {
  // //     this.pauseMusic(musicTrack);

  // //     this.playMusic(musicTrack)
  // //     //this.nav.push(MusicPlaying,musicTrack);
  // //   }
  // //   else {
  // //     this.playMusic(musicTrack);
  // //   }

  // // }

  // // checkMusic(music, currentTrack) {
  // //   if (currentTrack.playing) {
  // //     this.pauseMusic(currentTrack);
  // //     this.playMusic(music);
  // //   }
  // //   else {
  // //     this.nullCurrentTrack = false;
  // //     this.playMusic(music);
  // //   }
  // // }



  // playMusic(music,i) {
  //   this.musicNumber = i;
  //   if(this.audio == null){
  //     alert("from null"+ this.audio)
  //     this.play(music);
  //   }
  //   else{
  //     if(this.musicNumber == i){
  //       alert("from musicNumber == i/"+i+"/"+this.audio)

  //       if(this.playing){
  //         this.pauseMusic();
  //       }
  //       else{
  //         this.resumeMusic();
  //       }
  //     }
  //     else{
  //       alert("from musicNumber != i/"+i+"/"+ this.audio)
  //       this.stopMusic();
  //       this.play(music);
  //     }
  //   }

  //   // console.log(music);
  //   // this.audio = null;
  //   // this.audio = this.media.create(music.src);
  //   // if(this.audio==null){
  //   //   alert("can not play");
  //   // }
  //   // else {




  //   // }

  // }
  // play(music){
  //   this.audio = this.media.create(music.src);
  //   this.audio.onStatusUpdate.subscribe(status => this.status = status);
  //   this.audio.play();
  //   this.playing = true;
  //   this.audio.getCurrentPosition().then((position)=>{
  //     this.currentPosition = position.ToString();
  //   });
  //   this.musicDuration = this.audio.getDuration();
  // }
  // pauseMusic() {
  //   this.currentPosition =  this.audio.getCurrentPosition();
  //    this.audio.pause();
  //   this.paused = true;

  //   // console.log("playing: " + music.playing);
  //  // this.streamingAudio.pauseAudio();
  // }

  // resumeMusic(){
  //   this.audio.seekTo(this.currentPosition);
  //   this.audio.play();
  //   this.playing=true;
  // }
  // stopMusic(){
  //   this.audio.stop();
  //  //this.streamingAudio.stopAudio();
  // }
}
