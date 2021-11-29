import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { FilterService } from 'src/app/core/services/filterService/filter.service';
import { PriceService } from 'src/app/core/services/filterService/price.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  
  constructor(
    private filterService: FilterService,
    private priceService: PriceService
  ) { }

  ngOnInit(): void {
  }

  setCheckbox(){
    this.filterService.setClear();
    this.filterService.mySubject.next(true);
  }

}
