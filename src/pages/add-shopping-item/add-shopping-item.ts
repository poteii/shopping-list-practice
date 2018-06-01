import { ShoppingListService } from './../../services/shopping-list.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item.model';
import { ToastService } from '../../services/toast.service';


@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {

  item: Item = {
    name: '',
    quantity: undefined,
    price: undefined
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private shoppingListService: ShoppingListService, private toast: ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingItemPage');
  }

  addItem(item: Item) {
    this.shoppingListService.addItem(item).then(
      ref => {
        this.toast.show(item.name + " added!");
        this.navCtrl.setRoot('HomePage', { key: ref.key });
      }
    );
  }

}
