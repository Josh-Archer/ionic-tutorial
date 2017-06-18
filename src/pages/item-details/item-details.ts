import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Selected',
      message: 'You sleected ' + this.selectedItem.title,
      buttons: ['Ok']
    });
    alert.present();
  }
}
