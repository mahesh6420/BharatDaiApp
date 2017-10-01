import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoPage } from '../pages';
import { Gallery } from '../../components/gallery/gallery';

@NgModule({
  declarations: [
    PhotoPage,
    Gallery
  ],
  imports: [
    IonicPageModule.forChild(PhotoPage),
  ],
  exports: [
    PhotoPage
  ]
})
export class PhotoPageModule {}