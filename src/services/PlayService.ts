import { StreamingMedia, StreamingVideoOptions } from "@ionic-native/streaming-media";
import { Injectable } from '@angular/core';

@Injectable()
export class PlayService {

    constructor(
        private streamingMedia: StreamingMedia,) {
        
    }
    private  videoOptions: StreamingVideoOptions
    async play(_videoclicked, _videoIndex){
        console.log("play tabbed");
          var videoUrl = _videoclicked.videoUrl.slice('32')
          console.log(videoUrl)
        try{
            this.videoOptions = {
            //   volume:0.7
               // successCallback:()=>{alert("video Played")},
                errorCallback:(e)=>{alert("Error Streaming")},
                orientation:'landscape'
             };
            //this.videoPlayer.play(_videoclicked.videoUrl, this.videoOptions);
            // 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_30mb.mp4'
            this.streamingMedia.playVideo(_videoclicked.videoUrl,this.videoOptions);
           // this.yoube.openVideo(videoUrl);
    
        }
        catch(e){
          console.error(e);
        }
      }

      
}