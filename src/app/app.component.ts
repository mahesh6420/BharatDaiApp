import { Media } from '@ionic-native/media';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { HTTP_PROVIDERS } from '@angular/http';

import { HomePage, VideoPage, MusicPage, PhotoPage, MusicPlaying } from '../pages/pages';
import { MainApiService } from "../services/services";

import * as firebase  from 'firebase';
import { AboutPage } from '../pages/about/about';
import {Storage} from '@ionic/storage'
import { NativeStorage } from '@ionic-native/native-storage'

@Component({
  templateUrl: 'app.html',
  providers :[
    MainApiService,
    //HTTP_PROVIDERS,
    Media
  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string,icon:string, component: any}>;

   //fireauth = firebase.auth();

  constructor(public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
  public all:MainApiService,
  public storage:Storage,
public nativeStorage:NativeStorage) {
    
   var config = {
        apiKey: "AIzaSyBkBFBep1cRpyR0qO95vP2GRUV17nRCFYA",
        authDomain: "com-luklasoft-bharat-samari.firebaseapp.com",
        databaseURL: "https://com-luklasoft-bharat-samari.firebaseio.com",
        projectId: "com-luklasoft-bharat-samari",
        storageBucket: "com-luklasoft-bharat-samari.appspot.com",
        messagingSenderId: "186241174826"
    };

    firebase.initializeApp(config);
    this.login();
     this.initializeApp();
    //  if(this.all.bmusic.length == 0) {
    //   this.storage.get('trackStoredData').then((data)=>{
    //     this.all.bmusic = data.tracks;
    //    })
    //  }
    this.storage.clear();
    this.storage.get('trackStoredData').then((data)=>{
     // console.log('trackstoreddata//app.compo///'+ JSON.stringify(data))
      if(data==null){
        
        this.all.getTracks();
      }
      else{
        
        this.all.bmusic = data.tracks
        console.log('from else');
      }
   },
  error=> alert('Error while connecting to the internet.') )
    
     //this.all.getTracks();
     this.all.getBiography();
     this.all.getSocialAccounts();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home',
        icon: 'home',
       component: HomePage 
      },
      { title: 'Photo',icon:"images", component: PhotoPage },
      { title: 'Music',icon:"musical-notes",  component: MusicPage },
      { title: 'Video',icon:"videocam",  component: VideoPage },
      { title: 'About',icon:"bowtie",  component: AboutPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
 

  login(){
    firebase.auth().signInWithEmailAndPassword('user@user.com','user123').then((res)=>{
      console.log("logged in");
    });
  }
}
