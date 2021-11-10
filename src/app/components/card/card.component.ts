import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/cardsInterface';
import { StorageService } from 'src/app/services/dataService/storage.service';
import { WishListService } from 'src/app/services/wishListService/wish-list.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  id = '';

  @Input() product: Product = {
    id: '',
    images: [],
    title: '',
    rating: 0,
    price: 0,
    category: '',
    brand: ''
  }

  constructor(
    private wishListService: WishListService,
    private activatedRoute: ActivatedRoute,
    private dataService: StorageService
    ) { }

  ngOnInit(): void {
    //this.id = this.activatedRoute.snapshot.params.i;
    
  }

  getId(value:string){
    this.dataService.setId(value);
  }

  addToWishList(id:string):void{
    this.wishListService.setFavorites(id);
  }

}
