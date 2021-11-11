import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { StorageService } from 'src/app/services/dataService/storage.service';
import { takeUntil } from 'rxjs/operators';
import { PageService } from 'src/app/services/pageService/page.service';
import { FilterService } from 'src/app/services/filterService/filter.service';
import { PriceService } from 'src/app/services/filterService/price.service';
import { InputService } from 'src/app/services/inputService/input.service';
import { ActivatedRoute } from '@angular/router';
import { WishListService } from 'src/app/services/wishListService/wish-list.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit, OnDestroy, DoCheck {
  productsList: any;
  currentPage: number;
  resultList: any;
  brands: string[] = [];
  categories: string[] = [];
  price: any;
  inputValue = '';
  favoritesList: string[] = [];

  private destoy = new Subject<void>();

  constructor(
    private secvices: StorageService,
    private pageService: PageService,
    private filtersService: FilterService,
    private priceService: PriceService,
    private inputService: InputService,
    private route: ActivatedRoute,
    private wishListService: WishListService
  ) {
    this.currentPage = 1;
    this.resultList = [];
  }

  ngOnInit(): void {
    this.secvices.getCards()
      .pipe(takeUntil(this.destoy))
      .subscribe(data => {
        this.productsList = data
      });

    this.pageService.getPageValue()
      .pipe(takeUntil(this.destoy))
      .subscribe(data => {
        this.currentPage = data
      });

    this.filtersService.getCategoriesCheckbox()
      .pipe(takeUntil(this.destoy))
      .subscribe(data => {
        this.categories = data
      });

    this.filtersService.getBrandsCheckbox()
      .pipe(takeUntil(this.destoy))
      .subscribe(data => {
        this.brands = data
      });

    this.priceService.getPrice()
      .pipe(takeUntil(this.destoy))
      .subscribe(data => {
        this.price = data
      });

    this.inputService.getInputValue()
      .pipe(takeUntil(this.destoy))
      .subscribe(data => {
        this.inputValue = data
      });

    this.wishListService.getWishList()
      .pipe(takeUntil(this.destoy))
      .subscribe(data => {
        this.favoritesList = data
      });
  }

  ngDoCheck(): any {
    switch (Object.values(this.route.data)[6].type) {
      case 'all':
        this.resultList = this.productsList.filter((item: any) => this.brands.length > 0 ? this.brands.includes(item.brand) : item.brand);
        this.resultList = this.resultList.filter((item: any) => this.categories.length > 0 ? this.categories.includes(item.category) : item.category);
        this.resultList = this.resultList.filter((item: any) => this.price.value <= item.price && item.price <= this.price.highValue);
        this.resultList = this.resultList
          .filter((item: any) => item.title.toLowerCase().includes(this.inputValue, 0))
          .slice(this.currentPage * 9 - 9, this.currentPage * 9);
        break;

      case 'wishList':
        this.resultList = this.productsList.filter((item: any) => this.favoritesList.includes(item.id));
        break;
    }
  }

  ngOnDestroy(): void {
    this.destoy.next();
    this.destoy.complete();
  }

}

