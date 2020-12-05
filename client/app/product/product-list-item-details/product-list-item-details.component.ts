import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {IProduct, IVariant} from '../../shared/models/IProduct';
import {MessengerService} from '../../shared/service/messenger.service';
import {CartService} from '../../shopping-cart/cart.service';
import {ICartItem} from '../../shared/models/cart';

@Component({
  selector: 'app-product-list-item-details',
  templateUrl: './product-list-item-details.component.html',
  styleUrls: ['./product-list-item-details.component.scss']
})
export class ProductListItemDetailsComponent implements OnInit {

  product: IProduct = null;
  quantity = 1;

  selectedVariant: IVariant;
  selectedVariantSize: string;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private service: ProductService,
              private cartService: CartService,
              private messengerService: MessengerService) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getById(id);
  }

  getById(id: string): void {
    this.service.getProductById(id).subscribe(it => {
      this.product = it;
      if (this.product.variants.length > 0) {
        this.selectedVariant = this.product.variants[0];
        this.selectedVariantSize = this.product.variants[0].size[0];
      }
    });
  }

  increaseQuantity(): void {
    if (this.quantity <= this.selectedVariant.quantity) {
      this.quantity++;
    }
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  handleAddToCart(product: IProduct): void {
    const cartItem: ICartItem = {
      id: Math.floor(Math.random() * 1000000),
      productId: product.id,
      productPrice: product.price,
      productName: product.name,
      variantColor: this.selectedVariant.color,
      variantSize: this.selectedVariantSize,
      quantity: this.quantity
    };

    this.cartService.addProductToCart(cartItem);
    this.messengerService.addProduct(product);

    this.router.navigate(['/cart']);
  }

  selectColor(variant: IVariant): void {
    this.selectedVariant = variant;
    this.selectedVariantSize = variant.size[0];
    this.quantity = 1;
  }

  selectVariantSize(size: string): void {
    this.selectedVariantSize = size;
  }
}
