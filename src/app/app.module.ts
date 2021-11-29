import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { HttpClientModule } from '@angular/common/http';
/*import { PageItemComponent } from './components/page-item/page-item.component';
import { DoubleSliderComponent } from './components/double-slider/double-slider.component';*/
import { FormsModule } from '@angular/forms';
/*import { AllContentComponent } from './components/all-content/all-content.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { BreadCrumbsComponent } from './shared/bread-crumbs/bread-crumbs.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { ItemCardComponent } from './components/item-card/item-card.component';*/
import { TimeService } from './core/guards/time.service';
import { ComponentsModule } from './components/components.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
    
    //AllContentComponent,
    //NotFoundPageComponent,
    //BreadCrumbsComponent,
    //WishListComponent,
    //ItemCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    

    ComponentsModule,
    CoreModule
  ],
  providers: [
    {
      provide: TimeService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
