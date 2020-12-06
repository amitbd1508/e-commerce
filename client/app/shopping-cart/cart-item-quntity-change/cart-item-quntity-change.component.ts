import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICartItem} from '../../shared/models/cart';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart-item-quntity-change',
  templateUrl: './cart-item-quntity-change.component.html',
  styleUrls: ['./cart-item-quntity-change.component.scss']
})
export class CartItemQuntityChangeComponent implements OnInit {

  @Input() cartItem: ICartItem;
  @Output() quantityChange: EventEmitter<string> = new EventEmitter<string>();


  constructor(private service: CartService) { }

  ngOnInit(): void {
  }

  decrement(cartItem: ICartItem): void {
    if (cartItem.quantity > 1) {
      cartItem.quantity--;
      this.service.updateCart(cartItem);
      this.quantityChange.emit('increment');
    }
  }

  increment(cartItem: ICartItem): void {
    cartItem.quantity++;
    this.service.updateCart(cartItem);
    this.quantityChange.emit('decrement');

  }
}
