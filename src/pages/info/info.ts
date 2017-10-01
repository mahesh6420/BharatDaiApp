import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MainApiService } from '../../services/services';


/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
IonicPage
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
 Title='Info'
 socialAccounts:any;
 info:any;
  constructor(public navCtrl: NavController, private mainApi: MainApiService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
    this.socialAccounts = this.mainApi.bsocial
    this.getinfo();
  }
 getinfo(){
   this.mainApi.getInfo();
this.info = this.mainApi.binfo;
 }
}
