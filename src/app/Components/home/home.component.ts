import { Component, OnInit } from '@angular/core';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  StoreInfo: StoreData;
  isImageshown: boolean = true;
  constructor() {
    this.StoreInfo = new StoreData(
      'ITI Store',
      'https://source.unsplash.com/user/c_v_r/300x200',
      ['cairo', 'alex', 'fayoum', 'Qena']
    );
  }

  ngOnInit(): void {}
  toggleImage(): void {
    this.isImageshown = !this.isImageshown;
    console.log(this.isImageshown);
  }
}
