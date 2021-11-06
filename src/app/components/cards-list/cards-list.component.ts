import { Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';
import { takeUntil } from 'rxjs/operators';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit, OnDestroy, DoCheck {
  productsList: any;
  currentPage: number;
  resultList: any;

  private destoy = new Subject<void>();

  constructor(
    private secvices: StorageService,
    private pageService: PageService
  ) {
    this.currentPage = 1;
    this.resultList = this.productsList;
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
  }

  ngDoCheck():void{
    console.log(this.productsList)
    
  }

  ngOnDestroy(): void {
    this.destoy.next();
    this.destoy.complete();
  }

}

