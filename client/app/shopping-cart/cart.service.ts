import {Injectable} from '@angular/core';
import {CartItem} from '../shared/models/cart';
import {MessengerService} from '../shared/service/messenger.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private messengerService: MessengerService) {
  }

  getCartItems(): CartItem[] {
    const cartItems: CartItem[] = JSON.parse(localStorage.getItem('cartItems'));
    return cartItems ? cartItems : [];
  }

  getCartItemsCount(): number {
    const cartItems: CartItem[] = JSON.parse(localStorage.getItem('cartItems'));
    if (cartItems) {
      return cartItems.length;
    }
    return 0;
  }

  addProductToCart(cartItem: CartItem): CartItem[] {
    let currentCart: CartItem[] = JSON.parse(localStorage.getItem('cartItems'));
    if (!currentCart) {
      currentCart = [];
    }
    currentCart.push(cartItem);
    localStorage.setItem('cartItems', JSON.stringify(currentCart));
    this.messengerService.updateCart();

    return currentCart;
  }

  calculateCartTotal(cartItems: CartItem[]): number {
    let cartTotal = 0;
    cartItems.forEach(item => {
      cartTotal += (item.quantity * item.productPrice);
    });

    return cartTotal;
  }

  updateCart(updatedCartItem: CartItem): void {
    const currentCart: CartItem[] = JSON.parse(localStorage.getItem('cartItems'));

    for (let i = 0; i < currentCart.length; i++) {
      if (currentCart[i].id === updatedCartItem.id) {
        currentCart[i] = updatedCartItem;
      }
    }

    localStorage.setItem('cartItems', JSON.stringify(currentCart));
    this.messengerService.updateCart();
  }

  removeCartItem(cartItem: CartItem): void {
    const currentCart: CartItem[] = JSON.parse(localStorage.getItem('cartItems'));

    for (let i = 0; i < currentCart.length; i++) {
      if (currentCart[i].id === cartItem.id) {
        currentCart.splice(i, 1);
      }
    }

    localStorage.setItem('cartItems', JSON.stringify(currentCart));
    this.messengerService.updateCart();
  }

  clearCart(): void {
    localStorage.removeItem('cartItems');
  }
}
