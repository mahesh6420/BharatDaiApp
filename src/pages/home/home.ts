
import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { MusicPage,PhotoPage,VideoPage } from '../pages';
import { MainApiService } from '../../services/services';
import { PlayService } from '../../services/PlayService';
import { InfoPage } from '../info/info';
import { PopoverPage } from '../popover/popover';




@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    //styleUrls: ['home.component.scss']
})
export class HomePage {
    Title='Home'
    img:any = []
    videos:any = []
    socialAccounts:any=[];
    constructor(private nav: NavController,
        private mainApi:MainApiService, 
        private playService: PlayService,
        public popoverCtrl: PopoverController
     ) {
    }

    slideOptions ={
        initialSlide:0,
        loop: true,
        autoplay: 2000,
        autoplayDisableOnInteraction:false
    }

    ionViewDidLoad(){
        this.getPhotos();
        this.loadAccounts()
        this.getVideos();
       
    }
    onLink(url: string) {
        window.open(url);
    }
    loadAccounts(){
        //this.social.getSocialAccounts();
        this.socialAccounts = this.mainApi.bsocial;
      }

      popover(event){
        let popover = this.popoverCtrl.create(PopoverPage);
        popover.present()
      }
   goToMusics(){
      this.nav.push(MusicPage);
   }

   goToVlogs(){
     //this.nav.push(V)
   }

   goToPhotos(){
       this.nav.push(PhotoPage)
   }
   getPhotos(){
       this.mainApi.getPhotos(this.Title);
       this.img = this.mainApi.bphotos;
   }
    
   goToVideos(){
       this.nav.push(VideoPage);
   }
   getVideos(){
    this.mainApi.getVideos()
    .then(data=>this.videos = data)
   }
    play(video, i){
        this.playService.play(video,i);
    }
    
    
}
