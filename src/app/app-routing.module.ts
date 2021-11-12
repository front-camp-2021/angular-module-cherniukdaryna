import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllContentComponent } from './components/all-content/all-content.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { TimeService } from './core/guards/time.service';


const routes: Routes = [
  {
    path: 'products/wishList',
    component: WishListComponent,
    data: {type: 'wishList'},
    canActivate: [TimeService]
  },
  {
    path: 'products',
    component: AllContentComponent,
    data: {type: 'all'},
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
  {
    path: ':id',
    component: ItemCardComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
