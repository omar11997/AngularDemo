import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductListComponent } from './Components/Order/product-list/product-list.component';
import { OrderMasterComponent } from './Components/Order/OrderMaster/order-master/order-master.component';
import { NotFoundComponentComponent } from './Components/NotFound/NotFoundComponent/NotFoundComponent.component';
import { LoginComponent } from './Components/Login/Login.component';
import { LayoutComponent } from './Components/Layout/Layout.component';
import { ProductDetailsComponent } from './Components/Order/product-details/product-details.component';

const routes: Routes = [
  ////this array works with first-match strategy {so the ararnge inside this array is very important}
  ///route configuration
  {
    path: '',
    component: LayoutComponent,
    children: [
      ///this paths will open as childs for the layout Compenent inside {<router-outlet></router-outlet>}
      { path: '', redirectTo: '/Home', pathMatch: 'full' }, ///Handle default path
      { path: 'Home', component: HomeComponent },
      { path: 'product', component: ProductListComponent },
      { path: 'product/:pid', component: ProductDetailsComponent },
      { path: 'order', component: OrderMasterComponent },
    ],
  },
  //this paths will open directly without layout
  { path: 'Login', component: LoginComponent },
  { path: 'Logout', component: LoginComponent },
  { path: '**', component: NotFoundComponentComponent }, ///handle wild card path {not found path}
];
////this module resonsible for route handling
@NgModule({
  ///the AppRoutingModule is a normla calss that import RouterModule and also export it
  ///and that means any class that deal with AppRoutingModule will also interact with RouterModule which related to angular

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
