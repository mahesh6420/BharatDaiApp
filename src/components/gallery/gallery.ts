import { Component, OnInit, Input } from '@angular/core'
import { ModalController } from 'ionic-angular';

import { SliderModal } from './slider/slider'


@Component({
    selector: 'gallery',
    templateUrl: 'gallery.html'
    
})

export class Gallery implements OnInit {
    @Input() 
    images: any[];
    
    constructor(
        private modalCtrl: ModalController
    ) {

    }

    ngOnInit() {
    }

    openModal( _selectId ) {
        
        let profileModal = this.modalCtrl.create( 
            SliderModal , { images: this.images, selectId: _selectId }
        )
        profileModal.present()
    }
    
}