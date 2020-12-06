import {Component, OnInit} from '@angular/core';
import {CartService} from '../cart.service';
import {CartItem} from '../../shared/models/cart';
import {ProductService} from '../../product/product.service';
import {Router} from '@angular/router';
import {ToastComponent} from '../../shared/components/toast/toast.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[];
  cartTotal: number;

  constructor(private service: CartService,
              private router: Router,
              public toast: ToastComponent,
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

  removeItem(cartItem: CartItem): void {
    this.service.removeCartItem(cartItem);
    this.loadCart();
  }

  onChangeQuantity($event: string): void {
    if ($event !== 'failed') {
      this.loadCart();
    } else {
      this.toast.setMessage('Cannot increase the quantity of this product!', 'danger');
    }
  }
}
