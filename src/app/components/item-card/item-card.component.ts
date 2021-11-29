import { Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { StorageService } from 'src/app/core/services/dataService/storage.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit, OnDestroy, DoCheck {
  list: any[] = [];
  arr: any[] = [];
  cardId = '';
  private destoy = new Subject<void>();

  constructor(private dataService: StorageService) { }

  ngOnInit(): void {
    this.dataService.getId()
      .pipe(takeUntil(this.destoy))
      .subscribe(data => {
        this.cardId = data
      });

    this.dataService.getCards()
      .pipe(takeUntil(this.destoy))
      .subscribe(data => {
        this.arr = data
      });
  }

  ngDoCheck():void{
    this.list = this.arr.filter((item:any) => item.id === this.cardId);
  }

  ngOnDestroy(): void {
    this.destoy.next();
    this.destoy.complete();
  }
}
