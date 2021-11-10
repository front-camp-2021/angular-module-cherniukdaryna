import { Component, OnInit } from '@angular/core';
import { WishListService } from 'src/app/services/wishListService/wish-list.service';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss']
})
export class BreadCrumbsComponent implements OnInit {

  constructor(private wishListService: WishListService) { }

  ngOnInit(): void {
  }

  clearWishList():void{
    this.wishListService.setClear();
  }

}
