import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { carts } from '../carts';
import { CartsService } from '../carts.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  carts;
  constructor(
    private cartsService: CartsService,
    private router: Router
  ) {
    this.carts = cartsService.getItems()
  }

  ngOnInit(): void {
  }

  deleteCart(cartId) {
    this.cartsService.deleteItem(cartId);
  }
}
