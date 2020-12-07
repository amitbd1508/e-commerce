import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../shared/models/product';
import { CartItem } from '../shared/models/cart';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/v1/product');
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`/api/v1/product/${id}`);
  }

  checkout(cart: CartItem[]): Observable<CartItem[]> {
    return this.http.post<CartItem[]>(`/api/v1/product/checkout`, cart);
  }
}
