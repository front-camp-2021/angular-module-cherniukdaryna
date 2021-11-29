import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/interfaces/cardsInterface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private cardsData = 'http://localhost:3000/products';
  private categoriesData = 'http://localhost:3000/categories';
  private brandsData = 'http://localhost:3000/brands';
  id =  new BehaviorSubject<string>('');

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

  getId():BehaviorSubject<string>{
    return this.id;
  }

  setId(value:string):void{
    this.id.next(value);
  }
}
