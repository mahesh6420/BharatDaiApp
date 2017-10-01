import { Component, ViewChild} from '@angular/core'
import { NavParams, Slides, ViewController } from 'ionic-angular';


@Component({
    selector: 'slider',
    templateUrl: 'slider.html'
})
export class SliderModal {
    @ViewChild(Slides) slides: Slides

    images: any[]
    selectId: number
    actualImage: any

    constructor(
        private params: NavParams,
        private viewCtrl: ViewController
    ) {
        this.images = params.get('images')
        this.selectId = params.get('selectId')
        console.log(this.selectId)
    }

    closeModal() {
        this.viewCtrl.dismiss()
    }

}