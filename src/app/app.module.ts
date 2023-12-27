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
import { StaticProductsService } from './Services/static-products.service';
import { LoginComponent } from './Components/Login/Login.component';
import { NotFoundComponentComponent } from './Components/NotFound/NotFoundComponent/NotFoundComponent.component';
import { LayoutComponent } from './Components/Layout/Layout.component';
import { ProductDetailsComponent } from './Components/Order/product-details/product-details.component';
import { UserLogComponent } from './Components/user-log/user-log.component';
import {HttpClientModule} from '@angular/common/http';
import { AddProductComponent } from './Components/add-product/add-product.component'

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
    LoginComponent,
    NotFoundComponentComponent,
    LayoutComponent,
    ProductDetailsComponent,
    UserLogComponent,
    AddProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,HttpClientModule],
  ////you can inject service inside this provider {when creating this module will create new instance from the service }
  providers: [
    // ex . StaticProductsService
  ],
  ///Bootstrap indicate which component that it will starts with
  bootstrap: [AppComponent],
})
export class AppModule {}
