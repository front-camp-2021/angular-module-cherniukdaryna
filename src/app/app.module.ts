import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CardComponent } from './components/card/card.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { FilterItemComponent } from './components/filter-item/filter-item.component';
import { FiltersListComponent } from './components/filters-list/filters-list.component';
import { InputComponent } from './components/input/input.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    CardComponent,
    CardsListComponent,
    FilterItemComponent,
    FiltersListComponent,
    InputComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
