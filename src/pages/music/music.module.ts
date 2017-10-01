import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicPage } from '../pages';

@NgModule({
  declarations: [
    MusicPage
  ],
  imports: [
    IonicPageModule.forChild(MusicPage),
  ],
  exports: [
    MusicPage
  ],
   schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA,
    //NO_ERRORS_SCHEMA
  ],
})
export class MusicPageModule {}