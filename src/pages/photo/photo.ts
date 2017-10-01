import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { MainApiService } from '../../services/services';

/**
 * Generated class for the Photo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html',
})
export class PhotoPage {
  Title = "Photos";
  //bphotos = ['assets/img/1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg']
  bphotos: any[] = []
  constructor(public navCtrl: NavController, public navParams: NavParams, private mainApiService: MainApiService) {
  }
    

  ionViewDidLoad() {
    console.log('ionViewDidLoad Photo');
    this.getPhotos();
  }
  getPhotos(){
   this.mainApiService.getPhotos(this.Title);
   this.bphotos = this.mainApiService.bphotos;
   console.log(this.bphotos);
  }

}
