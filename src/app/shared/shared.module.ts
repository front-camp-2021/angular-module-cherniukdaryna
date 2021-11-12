import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbsComponent } from './components/bread-crumbs/bread-crumbs.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CardComponent } from './components/card/card.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { FilterItemComponent } from './components/filter-item/filter-item.component';
import { FiltersListComponent } from './components/filters-list/filters-list.component';
import { InputComponent } from './components/input/input.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PageItemComponent } from './components/page-item/page-item.component';
import { DoubleSliderComponent } from './components/double-slider/double-slider.component';



@NgModule({
  declarations: [
    SideBarComponent,
    CardComponent,
    CardsListComponent,
    FilterItemComponent,
    FiltersListComponent,
    InputComponent,
    PaginationComponent,
    PageItemComponent,
    DoubleSliderComponent,
    BreadCrumbsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgxSliderModule,
  ],
  exports: [
    SideBarComponent,
    CardComponent,
    CardsListComponent,
    FilterItemComponent,
    FiltersListComponent,
    InputComponent,
    PaginationComponent,
    PageItemComponent,
    DoubleSliderComponent,
    BreadCrumbsComponent
  ]
})
export class SharedModule { }
