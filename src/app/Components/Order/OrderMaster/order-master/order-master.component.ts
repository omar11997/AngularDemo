import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css'],
})
export class OrderMasterComponent {
  selectedCatId: number = 0;
  catList: ICategory[];
  orderTotalPrice: number = 0;
  constructor() {
    this.catList = [
      { id: 1, name: 'LapTops' },
      { id: 2, name: 'Mobiles' },
      { id: 3, name: 'Cameras' },
    ];
  }
}
