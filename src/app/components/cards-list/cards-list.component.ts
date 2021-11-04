import { Component, OnInit } from '@angular/core';
import { products } from '../../../data/products';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  productsList: any;

  constructor() {
    this.productsList = products;
  }

  ngOnInit(): void {
  }
  
}

