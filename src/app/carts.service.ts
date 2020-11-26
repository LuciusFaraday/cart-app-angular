import { Injectable } from '@angular/core';
import { carts } from './carts';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  items = carts;
  idCount = 1;

  addToItems(cart) {
    this.logger.log('addToItems', cart);
    this.idCount ++;
    this.items.push({cartId: this.idCount, ...cart});
  }

  getItems() {
    this.logger.log('getItems');
    return this.items;
  }

  getItem(cartId) {
    this.logger.log('getItem', cartId);
    return this.items.find((item) => item.cartId == cartId);
  }

  deleteItem(cartId) {
    this.logger.log('deleteItem', cartId);
    this.items = this.items.filter((item) => item.cartId != cartId);
  }

  editItem(cart, cartId: number) {
    this.logger.log('editItem', {cart, cartId});
    var index = this.items.findIndex((item) => item.cartId == cartId);
    this.items[index] = cart;
  }

  constructor(private logger: LoggerService) { }
}
