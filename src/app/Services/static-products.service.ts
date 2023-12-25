import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  // mean that the service will be Shared on the whole application (singleton design pattern)  {default}
  providedIn: 'root',
  //providedIn: 'ModuleName', // make the object of the service shared on the module definced
  //providedIn: 'any', //// make the object form service shared according to the loading type {Lazy of Eager}
})
export class StaticProductsService {
  private productList: IProduct[];
  constructor() {
    this.productList = [
      {
        id: 1,
        name: 'Lenovo1234',
        price: 100000,
        quantity: 3,
        imageUrl: 'https://source.unsplash.com/user/c_v_r/100x100',
        cateogryId: 1,
      },
      {
        id: 2,
        name: 'Dell1234',
        price: 30000,
        quantity: 0,
        imageUrl: 'https://source.unsplash.com/user/c_v_r/100x100',
        cateogryId: 1,
      },
      {
        id: 3,
        name: 'IPhone',
        price: 10000,
        quantity: 8,
        imageUrl: 'https://source.unsplash.com/user/c_v_r/100x100',
        cateogryId: 2,
      },
      {
        id: 4,
        name: 'SumsungA22',
        price: 5000056,
        quantity: 5,
        imageUrl: 'https://source.unsplash.com/user/c_v_r/100x100',
        cateogryId: 2,
      },
      {
        id: 5,
        name: 'Camera',
        price: 600,
        quantity: 9,
        imageUrl: 'https://source.unsplash.com/user/c_v_r/100x100',
        cateogryId: 3,
      },
      {
        id: 6,
        name: 'CamUltra345',
        price: 120900,
        quantity: 2,
        imageUrl: 'https://source.unsplash.com/user/c_v_r/100x100',
        cateogryId: 3,
      },
    ];
  }
  getAllProducts(): IProduct[] {
    return this.productList;
  }
  getProductByCatId(cateogryId: number): IProduct[] {
    if (cateogryId == 0) {
      return this.productList;
    }
    return this.productList.filter((prod) => prod.cateogryId == cateogryId);
  }
  getProductByID(prodId: number): IProduct | null {
    let foundedProduct = this.productList.find((prod) => prod.id == prodId);
    if (foundedProduct) return foundedProduct;
    return null;
  }
  getProductsIDs(): number[] {
    return this.productList.map((pro) => pro.id);
  }
}
