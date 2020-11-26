import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartListComponent } from './cart-list/cart-list.component';
import { RouterModule } from '@angular/router';
import { AddCartComponent } from './add-cart/add-cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CartEditComponent } from './cart-edit/cart-edit.component';
import { CartsService } from './carts.service';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CartListComponent,
    AddCartComponent,
    CartDetailsComponent,
    CartEditComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CartListComponent },
      { path: 'addCart', component: AddCartComponent },
      { path: 'carts/:cartId', component: CartDetailsComponent },
      { path: 'carts/edit/:cartId', component: CartEditComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
