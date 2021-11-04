import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit, OnDestroy {
  productsList: any;

  private destoy = new Subject<void>();

  constructor(private secvices: StorageService) {
  }

  ngOnInit(): void {
    this.secvices.getCards()
      .pipe(takeUntil(this.destoy))
      .subscribe(data => {
        this.productsList = data
      });
  }

  ngOnDestroy(): void {
    this.destoy.next();
    this.destoy.complete();
  }

}

