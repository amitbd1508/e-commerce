import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  cartSubject = new Subject();

  constructor() {
  }

  addProduct(product: Product): void {
    this.cartSubject.next(product);
  }

  clearCart(): void {
    this.cartSubject.next(null);
  }

  getAddProductNotification(): Observable<any> {
    return this.cartSubject.asObservable();
  }
}
