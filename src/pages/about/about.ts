import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { MainApiService } from '../../services/services';


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
IonicPage
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  Title ="Biography"
  socialAccounts:any = []
  Biography:any = []
  constructor(public navCtrl: NavController, private social: MainApiService) {
  }

  ionViewDidLoad() {
    this.loadAccounts();
    this.loadbiography();
  }

  loadAccounts(){
    //this.social.getSocialAccounts();
    this.socialAccounts = this.social.bsocial;
  }
  loadbiography(){
    this.Biography = this.social.bbiography;
  }
}
