import { Component, OnInit } from '@angular/core';
import { categories } from '../../../data/category';
import { brands } from '../../../data/brand';

@Component({
  selector: 'app-filters-list',
  templateUrl: './filters-list.component.html',
  styleUrls: ['./filters-list.component.scss']
})
export class FiltersListComponent implements OnInit {
  categoryList: any;
  brandsList: any;

  constructor() {
    this.categoryList = categories;
    this.brandsList = brands;
  }

  ngOnInit(): void {
  }

}
