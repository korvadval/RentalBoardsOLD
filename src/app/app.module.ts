import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './guest-site/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './guest-site/home/home.component';
import { AdvantagesComponent } from './guest-site/advantages/advantages.component';
import { CostsComponent } from './guest-site/costs/costs.component';
import { DiscountsComponent } from './guest-site/discounts/discounts.component';
import { ModalDialogWindowComponent } from './guest-site/modal-dialog-window/modal-dialog-window.component';
import { FooterComponent } from './guest-site/footer/footer.component';
import { CustomMapComponent } from './guest-site/custom-map/custom-map.component';
import { GalleryComponent } from './guest-site/gallery/gallery.component';
import { GuestSiteMainComponent } from './guest-site/guest-site-main/guest-site-main.component';
import { AdminSiteMainComponent } from './admin-site/admin-site-main/admin-site-main.component';
import { HeaderAdminComponent } from './admin-site/header-admin/header-admin.component';
import { TableOfClientsComponent } from './admin-site/table-of-clients/table-of-clients.component';
import { DialogAddClientComponent } from './admin-site/dialog-add-client/dialog-add-client.component';
import { LoginComponent } from './admin-site/login/login.component';

const appRoutes: Routes =[
  //{path:'admin', component:AdminSiteMainComponent},
  {path:'',component:GuestSiteMainComponent},
]

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
    CustomMapComponent,
    GalleryComponent,
    GuestSiteMainComponent,
    AdminSiteMainComponent,
    HeaderAdminComponent,
    TableOfClientsComponent,
    DialogAddClientComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
