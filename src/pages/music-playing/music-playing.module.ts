import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicPlaying } from '../pages';

@NgModule({
  declarations: [
    MusicPlaying
  ],
  imports: [
    IonicPageModule.forChild(MusicPlaying),
  ],
  exports: [
    MusicPlaying
  ]
})
export class MusicPlayingModule {}