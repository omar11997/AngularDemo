import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Route, Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from 'src/app/Services/static-products.service';
import { ProductsService } from 'src/app/Services/ProductService/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnChanges {
  // prdList: IProduct[];
  catPrdList: IProduct[] = [];
  orderTotalPrice: number = 0;
  // catList: ICategory[];
  //selectedCatId: number = 0;
  // use input decorator function to indicate that this prop comes from outside the class
  @Input() sentCatId: number = 0;
  ////@outPut indicate that this event will be accessed from outside the component
  //// EventEmitter is generic and return the type from number
  @Output() totalPriceChange: EventEmitter<number>;
  //////Define Obj from service to use functions inside it {Inject service inside the constructor}

  constructor(
    private staticProductService: StaticProductsService,
    private router: Router,
    private productService : ProductsService
  ) {
    // this.prdList = [
    //   {
    //     id: 1,
    //     name: 'Lenovo1234',
    //     price: 100000,
    //     quantity: 3,
    //     imageUrl: 'https://source.unsplash.com/user/c_v_r/100x100',
    //     cateogryId: 1,
    //   },
    //   {
    //     id: 2,
    //     name: 'Dell1234',
    //     price: 30000,
    //     quantity: 0,
    //     imageUrl: 'https://source.unsplash.com/user/c_v_r/100x100',
    //     cateogryId: 1,
    //   },
    //   {
    //     id: 3,
    //     name: 'IPhone',
    //     price: 10000,
    //     quantity: 8,
    //     imageUrl: 'https://source.unsplash.com/user/c_v_r/100x100',
    //     cateogryId: 2,
    //   },
    //   {
    //     id: 4,
    //     name: 'SumsungA22',
    //     price: 5000056,
    //     quantity: 5,
    //     imageUrl: 'https://source.unsplash.com/user/c_v_r/100x100',
    //     cateogryId: 2,
    //   },
    //   {
    //     id: 5,
    //     name: 'Camera',
    //     price: 600,
    //     quantity: 9,
    //     imageUrl: 'https://source.unsplash.com/user/c_v_r/100x100',
    //     cateogryId: 3,
    //   },
    //   {
    //     id: 6,
    //     name: 'CamUltra345',
    //     price: 120900,
    //     quantity: 2,
    //     imageUrl: 'https://source.unsplash.com/user/c_v_r/100x100',
    //     cateogryId: 3,
    //   },
    // ];
    // this.catList = [
    //   { id: 1, name: 'LapTops' },
    //   { id: 2, name: 'Mobiles' },
    //   { id: 3, name: 'Cameras' },
    // ];
    //this.catPrdList = this.prdList;
    ///@output
    this.totalPriceChange = new EventEmitter<number>();
  }

  ngOnChanges(): void {
    // this.filterProductsByCatId();
    // this.catPrdList = this.staticProductService.getProductByCatId(
    //   this.sentCatId
    // );
    ///////subscribe of the observable of the service
    this.productService.getproductsByCatId(this.sentCatId).subscribe((prodcuts) =>{
      this.catPrdList = prodcuts;
    });
  }

  ngOnInit(): void {
    //this.catPrdList = this.staticProductService.getAllProducts();

    this.productService.getAllProducts().subscribe(products =>{
      this.catPrdList = products;
    });
  }
  buy(productPrice: number, count: any) {
    this.orderTotalPrice += Number(count) * productPrice;

    // this.prdList[id].quantity -= count;
    ////Cast from string to number
    // 1) Implicit cast
    //let itemsCount: number = count;
    ///2) Explicit casting
    //let itemsCount: number;
    //itemsCount = parseInt(count);
    //itemsCount = Number(count);
    //itemsCount = (count as number) + 10;
    //itemsCount = +count;

    ////here where i need to excute my event  ///@output
    ///indidicate which number will the event return when emitting
    this.totalPriceChange.emit(this.orderTotalPrice);
  }
  prdTrackFn(index: number, product: IProduct): number {
    return product.id;

    ////this function inside the *ngfor to enhance the performane of the the looping
    ////to not reload the whole list when any changing happen in the funtuin
    /// inside this funtion i indicate the identity for each row in the list of products{id}
    ////Track the elements in list
    ////it takes the index of items and the element itself and return the identifier
  }
  // filterProductsByCatId() {
  //   console.log(this.sentCatId);
  //   if (this.sentCatId != 0) {
  //     this.catPrdList = this.prdList.filter(
  //       (e) => e.cateogryId == this.sentCatId
  //     );
  //   } else {
  //     this.catPrdList = this.prdList;
  //   }
  // }
  openProductDetails(prdId: number) {
    //// router is a built in service in angular used to handle routing from inside the code
    this.router.navigate(['/products', prdId]);
    ///another way
    //this.router.navigateByUrl('/products' + prdId);
  }
}
