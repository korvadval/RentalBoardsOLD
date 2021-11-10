import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { CostsComponent } from './costs/costs.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { ModalDialogWindowComponent } from './modal-dialog-window/modal-dialog-window.component';
import { FooterComponent } from './footer/footer.component';
import { CustomMapComponent } from './custom-map/custom-map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdvantagesComponent,
    CostsComponent,
    DiscountsComponent,
    ModalDialogWindowComponent,
    FooterComponent,
    CustomMapComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
