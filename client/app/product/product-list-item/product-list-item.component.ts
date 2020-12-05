import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../../shared/models/IProduct';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {

  @Input() product: IProduct;
  quantity = 0;

  constructor() {
  }

  ngOnInit(): void {
  }
}
