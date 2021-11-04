import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
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
