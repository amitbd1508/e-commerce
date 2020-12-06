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

  updateCart(): void {
    this.cartSubject.next('update-cart');
  }

  getCartChangeNotification(): Observable<any> {
    return this.cartSubject.asObservable();
  }
}
