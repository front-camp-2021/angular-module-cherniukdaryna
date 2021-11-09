import { Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { StorageService } from 'src/app/services/dataService/storage.service';
import { takeUntil } from 'rxjs/operators';
import { PageService } from 'src/app/services/pageService/page.service';
import { FilterService } from 'src/app/services/filterService/filter.service';
import { PriceService } from 'src/app/services/filterService/price.service';
import { products } from 'src/data/products';

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

  private destoy = new Subject<void>();

  constructor(
    private secvices: StorageService,
    private pageService: PageService,
    private filtersService: FilterService,
    private priceService: PriceService
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
  }

  ngDoCheck(): any {
    this.resultList = this.productsList.filter((item: any) => this.brands.length > 0 ? this.brands.includes(item.brand) : item.brand);
    this.resultList = this.resultList.filter((item: any) => this.categories.length > 0 ? this.categories.includes(item.category) : item.category);
    this.resultList = this.resultList.filter((item: any) => this.price.value <= item.price && item.price <= this.price.highValue);
  }

  ngOnDestroy(): void {
    this.destoy.next();
    this.destoy.complete();
  }

}

