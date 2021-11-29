import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllContentComponent } from './all-content/all-content.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    AllContentComponent,
    NotFoundPageComponent,
    WishListComponent,
    ItemCardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AllContentComponent,
    NotFoundPageComponent,
    WishListComponent,
    ItemCardComponent,
  ]
})
export class ComponentsModule { }
