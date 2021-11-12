import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FilterService } from 'src/app/core/services/filterService/filter.service';

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss']
})
export class FilterItemComponent implements OnInit {
  @Input() item = [];
  brands: string[] = [];
  categories: string[] = [];

  private destoy = new Subject<void>();

  constructor(private filtretionService: FilterService) {
  }

  ngOnInit(): void {
    this.filtretionService.mySubject
    .pipe(takeUntil(this.destoy))
    .subscribe(() => this.clearCheckbox());
  }

  clearCheckbox(): any {
    const isChecked = document.querySelectorAll('.third-filtres-list__radio-input');
    isChecked.forEach(check => (<HTMLInputElement>check).checked = false);
  }

  ngOnDestroy(): void {
    this.destoy.next();
    this.destoy.complete();
  }
}
