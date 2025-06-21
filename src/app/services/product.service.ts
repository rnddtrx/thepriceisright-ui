import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PagedResponse} from '../models/paged-response.model';
import {Product} from '../models/product.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  // api url
  private apiUrl = this.baseUrl+'/products';

  // method to get all products paged using http client
  public getAllProductsPaged(page: number, size: number):Observable<PagedResponse<Product>> {
    return this.http.get<PagedResponse<Product>>(`${this.apiUrl}/allbypage?page=${page}&size=${size}`);
  }

}
