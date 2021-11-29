import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  wishListArray = new BehaviorSubject<Array<string>>([]);
  favorites: string[] = [];

  constructor() { }

  getWishList():BehaviorSubject<Array<string>>{
    return this.wishListArray;
  }

  setFavorites(id:string):void{
    if(this.favorites.includes(id)){
      this.favorites = this.favorites.filter(value => value !== id)
    }
    else{
      this.favorites.push(id);
    }
    
    this.wishListArray.next(this.favorites);
  }

  setClear():void{
    this.favorites = [];
    this.wishListArray.next(this.favorites);
  }
}
