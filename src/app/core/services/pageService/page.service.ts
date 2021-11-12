import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private page = new BehaviorSubject<number>(1);

  constructor() { }

  getPageValue():BehaviorSubject<number>{
    return this.page;
  }

  setPageValue(value: number):void{
    this.page.next(value);
  }
}
