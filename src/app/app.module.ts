
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { IonicStorageModule} from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage'

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage,VideoPage,MusicPage,PhotoPage,MusicPlaying } from '../pages/pages';

import { MainApiService } from "../services/services";
//import { AngularFireModule } from "angularfire2";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MusicControls } from "@ionic-native/music-controls";
import { HttpModule  } from '@angular/http';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { Gallery } from '../components/gallery/gallery';
import { SliderModal } from '../components/gallery/slider/slider';

//Music Player
import { IonicAudioModule, WebAudioProvider,CordovaMediaProvider, defaultAudioProviderFactory } from 'ionic-audio'
//video player
import {VideoPlayer} from '@ionic-native/video-player';
import { PhotoPageModule } from '../pages/photo/photo.module';
import { MusicPageModule } from '../pages/music/music.module';
import { MusicPlayingModule } from '../pages/music-playing/music-playing.module';
import { VideoPageModule } from '../pages/video/video.module';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { PlayService } from '../services/PlayService';
import { AboutPage } from '../pages/about/about';
import { AboutPageModule } from '../pages/about/about.module';
import { InfoPage } from '../pages/info/info';
import { InfoPageModule } from '../pages/info/info.module';
import { PopoverPageModule } from '../pages/popover/popover.module';
import { PopoverPage } from '../pages/popover/popover';


export function myCustomAudioProviderFactory() {
  return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
   // VideoPage,
   // MusicPage,
   // PhotoPage,
   // MusicPlaying,
    ProgressBarComponent,
    //Gallery,
    SliderModal,
  ], 
  imports: [
    BrowserModule,
    IonicStorageModule,
    PhotoPageModule,
    VideoPageModule,
    AboutPageModule,
    MusicPlayingModule,
    MusicPageModule,
    InfoPageModule,
    PopoverPageModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    IonicAudioModule.forRoot(defaultAudioProviderFactory),
    HttpModule,
    //AngularFireModule.initializeApp(config),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VideoPage,
    MusicPage,
    PhotoPage,
    MusicPlaying,
    AboutPage,
    InfoPage,
    PopoverPage,
    SliderModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MainApiService,
    MusicControls,
    VideoPlayer,
    StreamingMedia,
    PlayService,
    Storage,
    NativeStorage
  ]
 
})
export class AppModule {}
