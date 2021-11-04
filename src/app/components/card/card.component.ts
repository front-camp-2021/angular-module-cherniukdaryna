import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/cardsInterface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product: Product = {
    id: '',
    images: [],
    title: '',
    rating: 0,
    price: 0,
    category: '',
    brand: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
