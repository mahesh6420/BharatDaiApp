import { MainApiService } from './../../services/main-api.service';
import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
//import { VideoPlayer, VideoOptions} from "@ionic-native/video-player"
import { StreamingMedia,StreamingVideoOptions } from "@ionic-native/streaming-media"
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player'
import { PlayService } from '../../services/PlayService';
@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
  Title = "Videos";
  videos:any=[];

 
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private videoApi: MainApiService,
    private loadingController: LoadingController,
    //private videoPlayer: VideoPlayer
    private playService: PlayService
  ) {
  }

   //videoOptions: VideoOptions;
   
  ionViewDidLoad() {
    console.log('ionViewDidLoad Video');
    let loader = this.loadingController.create({
      content: 'loading Videos...'
    });
    loader.present().then(()=>{
    
        this.videoApi.getVideos().then(data=>
          this.videos = data);
          console.log(this.videos);
          loader.dismiss();
          console.log(this.videos);
      
    })
  }
play(video, i){
 this.playService.play(video,i);
}
  tab(){
    console.log("tabb");
  }

  


}
