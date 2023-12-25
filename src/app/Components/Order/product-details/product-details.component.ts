import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from 'src/app/Services/static-products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  recievedPrdId: number = 0;
  // product: IProduct = {} as IProduct;
  product: IProduct | null = null;
  ///ActivatedRoute is a service that helps me to access the route
  constructor(
    private activateRoute: ActivatedRoute,
    private prdService: StaticProductsService,
    private location: Location
  ) {}
  ngOnInit(): void {
    ////when navigate to the  same component, angular will not reload the compenet
    // even if there are changes in the route paramters
    this.recievedPrdId = Number(
      ////this snapshot get the paramter form the route for the first time only
      ///and any change in the paramter will not affect on the component{wont reload the component }

      this.activateRoute.snapshot.paramMap.get('pid')
    );
    //console.log(this.recievedPrdId);
    this.product = this.prdService.getProductByID(this.recievedPrdId);
  }
  goBack() {
    ///means you will return backward step what ever this place
    this.location.back();
  }
}
