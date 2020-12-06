import {Component, OnInit} from '@angular/core';
import {CartService} from '../cart.service';
import {ICartItem} from '../../shared/models/cart';
import {ProductService} from '../../product/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: ICartItem[];
  cartTotal: number;

  constructor(private service: CartService,
              private router: Router,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartItems = this.service.getCartItems();
    this.cartTotal = this.service.calculateCartTotal(this.cartItems);
  }

  checkOut(): void {
    this.productService.checkout(this.service.getCartItems()).subscribe(it => {
      this.service.clearCart();
      this.router.navigate(['/product']);
    });
  }

  removeItem(cartItem: ICartItem): void {
    this.service.removeCartItem(cartItem);
    this.loadCart();
  }

  onChangeQuantity($event: string): void {
    this.loadCart();
  }
}
