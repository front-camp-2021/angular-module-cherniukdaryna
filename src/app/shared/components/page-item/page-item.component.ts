import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-item',
  templateUrl: './page-item.component.html',
  styleUrls: ['./page-item.component.scss']
})
export class PageItemComponent implements OnInit {
  @Input() item = 0;
  @Input() active = '';
  
  constructor() { 
   }

  ngOnInit(): void {
  }

}
