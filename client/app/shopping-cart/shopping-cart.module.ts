import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {CartComponent} from './cart/cart.component';
import {FormsModule} from '@angular/forms';
import {ShoppingCartRoutingModule} from './shopping-cart-routing.module';
import { CartItemQuntityChangeComponent } from './cart-item-quntity-change/cart-item-quntity-change.component';

@NgModule({
  declarations: [
    CartComponent,
    CartItemQuntityChangeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShoppingCartRoutingModule,
    FormsModule
  ]
})
export class ShoppingCartModule {
}
