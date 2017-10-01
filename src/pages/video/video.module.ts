import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoPage } from '../pages';

@NgModule({
  declarations: [
    VideoPage
  ],
  imports: [
    IonicPageModule.forChild(VideoPage),
  ],
  exports: [
    VideoPage
  ]
})
export class VideoPageModule {}