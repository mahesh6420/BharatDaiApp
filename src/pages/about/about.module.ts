import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutPage } from './about';

@NgModule({
  declarations: [
    AboutPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutPage),
  ],
  exports: [
    AboutPage
  ],
   schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA,
    //NO_ERRORS_SCHEMA
  ],
})
export class AboutPageModule {}
