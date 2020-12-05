import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {IProduct, IProductResponse} from '../shared/models/IProduct';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productResponse = new IProductResponse();

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('/api/product');
  }

  getProductById(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`/api/product/${id}`);
  }
}
