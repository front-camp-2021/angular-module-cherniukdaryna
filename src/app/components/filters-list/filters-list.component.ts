import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-filters-list',
  templateUrl: './filters-list.component.html',
  styleUrls: ['./filters-list.component.scss']
})
export class FiltersListComponent implements OnInit, OnDestroy {
  categoryList: any;
  brandsList: any;

  private destoy = new Subject<void>();

  constructor(private secvices: StorageService) { }

  ngOnInit(): void {
    this.secvices.getCategories()
      .pipe(takeUntil(this.destoy))
      .subscribe(data => {
        this.categoryList = data
      });

    this.secvices.getBrands()
      .pipe(takeUntil(this.destoy))
      .subscribe(data => {
        this.brandsList = data
      });
  }

  ngOnDestroy(): void {
    this.destoy.next();
    this.destoy.complete();
  }
}
