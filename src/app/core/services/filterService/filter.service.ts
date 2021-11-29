import { LiteralArrayExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  brandsArray = new BehaviorSubject<Array<string>>([]);
  categoriesArray = new BehaviorSubject<Array<string>>([]);

  activeBrand: string[] = [];
  activeCategory: string[] = [];

  mySubject = new Subject();

  constructor() { }

  getCategoriesCheckbox():BehaviorSubject<Array<string>>{
    return this.categoriesArray;
  }

  getBrandsCheckbox():BehaviorSubject<Array<string>>{
    return this.brandsArray;
  }

  setCheckbox(checked: string, section: string):void{
    const checkedName = checked.toLowerCase().replace(' ', '_');

    if (section === 'categories'){
      if(this.activeCategory.includes(checkedName)){
        this.activeCategory = this.activeCategory.filter(value => value !== checkedName)
      }
      else{
        this.activeCategory.push(checkedName);
      }
    }
    
    else if(section === 'brands'){
      if(this.activeBrand.includes(checkedName)){
        this.activeBrand = this.activeBrand.filter(value => value !== checkedName)
      }
      else{
        this.activeBrand.push(checkedName);
      }
    }
    this.brandsArray.next(this.activeBrand);
    this.categoriesArray.next(this.activeCategory);
  }

  setClear():any{
    this.activeCategory = [];
    this.activeBrand = [];
    this.brandsArray.next(this.activeBrand);
    this.categoriesArray.next(this.activeCategory);
  }

}