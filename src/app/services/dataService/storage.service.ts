import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/cardsInterface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private cardsData = 'http://localhost:3000/products';
  private categoriesData = 'http://localhost:3000/categories';
  private brandsData = 'http://localhost:3000/brands';

  constructor(private http: HttpClient) { }

  getCards(): Observable<any>{
    return this.http.get<Product>(this.cardsData);
  }

  getCategories(): Observable<any>{
    return this.http.get(this.categoriesData);
  }

  getBrands(): Observable<any>{
    return this.http.get(this.brandsData);
  }
}
