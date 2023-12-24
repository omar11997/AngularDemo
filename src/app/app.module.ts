import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductListComponent } from './Components/Order/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { LightboxDirective } from './Directives/lightbox.directive';
import { CurrencyTransformPipe } from './Directives/Pipes/currency-transform.pipe';
import { OrderMasterComponent } from './Components/Order/OrderMaster/order-master/order-master.component';

@NgModule({
  declarations: [
    ////Array of Components that inside this Module
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    ProductListComponent,
    LightboxDirective,
    CurrencyTransformPipe,
    OrderMasterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  ///Bootstrap indicate which component that it will starts with
  bootstrap: [AppComponent],
})
export class AppModule {}
