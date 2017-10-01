import { Injectable } from '@angular/core';
import {  Http} from "@angular/http";
import { MusicData } from './MusicModel'
import { Observable } from 'rxjs/Observable';
import { ITrackConstraint } from 'ionic-audio';
//import firebase from "firebase";


@Injectable()
export class MainApiService {
   
    bphotos: any[] = []
    bmusic:any[]=[];
    bsocial:any[] =[];
    bbiography:any[] =[];
    binfo:any[] =[];
private baseUrl = 'https://com-luklasoft-bharat-samari.firebaseio.com/'
    constructor(private http:Http){

    }
    getPhotos(title){
        if(title=="Photos"){
            console.log("from photos service");
            this.bphotos = [];
           return this.http.get(this.baseUrl+ 'photo-data.json')
           .map(res => res.json())
           .toPromise().then(data => {
                let i = 0
                data.forEach(element => {
                  if( i > data.length) { return false }
                 
                  this.bphotos.push(element)
                  i++
                })
            })
        }
        if(title=="Home"){
            console.log("from photos service");
            this.bphotos = [];
           return this.http.get(this.baseUrl+ 'photo-data.json')
           .map(res => res.json())
           .toPromise().then(data => {
                let i = 0
                data.forEach(element => {
                  if( i > 4) { return false }
                 
                  this.bphotos.push(element)
                  i++
                })
            })
        }
        
       
    }
    
    getTracks(){ //: Observable<ITrackConstraint[]>
        //  console.log("getTracks invoked " + this.baseUrl);
        // return new Promise(resolve =>{
        //     this.http.get(this.baseUrl + 'music-track-data.json')
        //         .subscribe(res => resolve(res.json()));
        // });
        if(this.bmusic.length==0){
            console.log('from get tracks inside if');
            this.http.get(this.baseUrl+ 'music-track-data.json')
            .map(res=>res.json())
            .toPromise().then(data=>{
                let i=0
                data.forEach(element => {
                    if(i>data.length){ return false}
                    this.bmusic.push(element);
                    i++
                });
            });
        }
        else{
            return false;
        }
      
    }

    getVideos(){
        console.log("getVideos invoked" + this.baseUrl);
        return new Promise(resolve=>{
            this.http.get(this.baseUrl+'video-data.json')
                .subscribe(res=>resolve(res.json()));
        })
    }

    getSocialAccounts(){
        if(this.bsocial.length==0){
            this.http.get(this.baseUrl+'social-accounts.json')
            .map(res=>res.json())
            .toPromise()
            .then(data=>{
                let i =0
                data.forEach(element => {
                    if(i>data.length){ return false}
                    this.bsocial.push(element);
                    i++
                });
            })
        }
       
    }

    getBiography(){
        this.http.get(this.baseUrl + "biography.json")
            .map(res=>res.json())
            .toPromise()
            .then(data=>{
               let i=0
               data.forEach(element => {
                if(i>data.length){ return false}
                   this.bbiography = data;
                   i++
               });
            })
    }

    getInfo(){
        this.http.get(this.baseUrl + 'info.json')
                 .map(res=>res.json())
                 .toPromise()
                 .then(data=>{
                     let i=0
                     data.forEach(element => {
                        if(i>data.length){ return false}
                         this.binfo = data;
                         i++
                     });
                 })
    }
}