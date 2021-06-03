import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ShopBasketComponent } from './shop-basket/shop-basket.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { ItemSummaryComponent } from './item-summary/item-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopBasketComponent,
    ItemCardComponent,
    ItemSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
