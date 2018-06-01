import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Item } from '../models/item.model';

/**
* This class provides the ShoppingList service with methods to read names and add names.
*/
@Injectable()
export class ShoppingListService {

    private shoppingListRef = this.db.list<Item>('shpping-list');

    constructor(private db: AngularFireDatabase) { }

    getShoppingList() {
        return this.shoppingListRef;
    }

    addItem(item: Item) {
        return this.shoppingListRef.push(item);
    }

    editItem(item: Item) {
        return this.shoppingListRef.update(item.key, item);
    }

    removeItem(item: Item) {
        return this.shoppingListRef.remove(item.key);
    }
}