import { Observable } from 'rxjs/Observable';
import { ShoppingListService } from './../../services/shopping-list.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item.model';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  shoppingList$: Observable<Item[]>;

  //snapshotChanges get key and value
  /* 
  npm install angularfire2@5.0.0-rc.6
  npm install firebase@4.12.1
  */

  constructor(public navCtrl: NavController, public navParams: NavParams, private shoppingListService: ShoppingListService) {
    this.shoppingList$ = this.shoppingListService
      .getShoppingList() // DB List
      .snapshotChanges() // key and value
      .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }))
        }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
