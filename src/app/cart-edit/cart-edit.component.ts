import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartValidatorService } from '../cart-validator.service';
import { CartsService } from '../carts.service';

@Component({
  selector: 'app-cart-edit',
  templateUrl: './cart-edit.component.html',
  styleUrls: ['./cart-edit.component.css']
})
export class CartEditComponent implements OnInit {

  cart;
  editCartForm;

  constructor(
    private route: ActivatedRoute,
    private cartsService: CartsService,
    private formBuilder: FormBuilder,
    private router: Router,
    private validator: CartValidatorService
  ) {

  }

  ngOnInit(): void {
    console.log(this.cartsService.getItems());
    this.route.paramMap.subscribe(params => {
      this.cart = this.cartsService.getItem(params.get('cartId'));
    });
    this.editCartForm = this.formBuilder.group(this.cart);
  }

  onSubmit(cartData) {
    if (this.validator.isValid(cartData))
    {
      this.cartsService.editItem(cartData, cartData.cartId);
      this.router.navigate(['/']);
    } else {
      alert("Invalid Edit");
    }
  }
}
