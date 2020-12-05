import {Component, OnInit} from '@angular/core';
import {CartService} from '../cart.service';
import {ICartItem} from '../../shared/models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: ICartItem[];
  cartTotal: number;

  constructor(private service: CartService) {
  }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartItems = this.service.getCartItems();
    this.cartTotal = this.service.calculateCartTotal(this.cartItems);
  }

  checkOut(): void {
    localStorage.removeItem('cartItems');
    this.loadCart();
  }

  decrement(cartItem: ICartItem): void {
    if (cartItem.quantity > 1) {
      cartItem.quantity--;
      this.service.updateCart(cartItem);
      this.loadCart();
    }
  }

  increment(cartItem: ICartItem): void {
    cartItem.quantity++;
    this.service.updateCart(cartItem);
    this.loadCart();
  }

  removeItem(cartItem: ICartItem): void {
    this.service.removeCartItem(cartItem);
    this.loadCart();
  }
}
