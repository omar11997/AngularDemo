import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { ProductListComponent } from '../../product-list/product-list.component';
import { StaticProductsService } from 'src/app/Services/static-products.service';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css'],
  /// you can create instance from service when creating this component
  //providers: [StaticProductsService],
})
export class OrderMasterComponent implements AfterViewInit {
  selectedCatId: number = 0;
  catList: ICategory[];
  receivedOrderTotalPrice: number = 0;
  /////@Viewchild
  //clientNameInput?: ElementRef; // Optional {may be elementRef or null}
  ///get ref from the dom element that has the template variable inside Viewchild
  @ViewChild('clientNameInput') clientNameInput!: ElementRef; // Non-null asseration operator {wont be null and will be insialized}
  ///get the whole  child component
  @ViewChild(ProductListComponent) prodListCompenentObj!: ProductListComponent; ///here it will get obj form the ts of this compenet
  constructor() {
    this.catList = [
      { id: 1, name: 'LapTops' },
      { id: 2, name: 'Mobiles' },
      { id: 3, name: 'Cameras' },
    ];
  }

  onTotalPriceChnage(totalPrice: number) {
    this.receivedOrderTotalPrice = totalPrice;
  }
  ngAfterViewInit(): void {
    this.clientNameInput.nativeElement.value = 'Your Name ';
    this.clientNameInput.nativeElement.style.border = '2px solid red';
    /////get all  fns of child comp and interact with it
    //console.log(this.prodListCompenentObj.prdList);
  }
}
