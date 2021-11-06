import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit, Optional } from '@angular/core';

@Component({
  selector: 'app-double-slider',
  templateUrl: './double-slider.component.html',
  styleUrls: ['./double-slider.component.scss']
})
export class DoubleSliderComponent implements OnInit {
  value: number = 100;
  highValue: number = 200;
  options: Options = {
    floor: 100,
    ceil: 200
  };

  constructor() { }

  ngOnInit(): void {
  }

}
