import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { MainApiService } from '../../services/services';


/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
IonicPage
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  constructor(public navCtrl: NavController,
  private mainApi: MainApiService,
  private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad PopoverPage');
  }
  info(){
    this.navCtrl.push(InfoPage);
  }
  refresh(){
    this.mainApi.getTracks();
    this.mainApi.getPhotos('Photos');
    this.mainApi.getBiography();
    let toast = this.toastCtrl.create({
      message:"Refreshed",
      duration: 3000
    });
    toast.present();
  }
}
