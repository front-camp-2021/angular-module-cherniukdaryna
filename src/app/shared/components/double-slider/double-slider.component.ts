import { ChangeContext, Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { PriceService } from 'src/app/core/services/filterService/price.service';

@Component({
  selector: 'app-double-slider',
  templateUrl: './double-slider.component.html',
  styleUrls: ['./double-slider.component.scss']
})
export class DoubleSliderComponent implements OnInit {
  value: number = 0;
  highValue: number = 90000;
  options: Options = {
    floor: 0,
    ceil: 90000
  };

  constructor(private priceService: PriceService) { }

  ngOnInit(): void {
  
  }

 getPrice(changeContext: ChangeContext){
    this.priceService.setPrice(changeContext);
  }

  resetForm(): void {
    this.value = 0;
    this.highValue = 90000;
    this.priceService.setPrice({ pointerType: 0, value: 0, highValue: 90000 });
  }
}
