import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ToastController } from 'ionic-angular';

/**
* This class provides the Toast service with methods to read names and add names.
*/
@Injectable()
export class ToastService {

    constructor(private toastCtrl: ToastController) { }

    show(message: string, duration: number = 3000) {
        return this.toastCtrl
            .create({
                message,
                duration
            }).present();
    }

}