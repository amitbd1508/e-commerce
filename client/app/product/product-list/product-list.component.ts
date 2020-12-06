import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {IProduct} from '../../shared/models/IProduct';
import {ToastComponent} from '../../shared/components/toast/toast.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: IProduct[];
  isLoading = true;
  constructor(private service: ProductService, public toast: ToastComponent) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.service.getProducts().subscribe(
      data => {
        this.products = data;
        this.toast.setMessage(`${this.products.length} products loaded`, 'info');
        console.log(data);
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }

}
