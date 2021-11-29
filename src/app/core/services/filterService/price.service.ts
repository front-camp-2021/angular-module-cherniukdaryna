import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  price = new BehaviorSubject<any>({ pointerType: 0, value: 0, highValue: 90000 });

  constructor() { }

  getPrice(): BehaviorSubject<any> {
    return this.price;
  }

  setPrice(value: any) {
    this.price.next(value);
  }
}
