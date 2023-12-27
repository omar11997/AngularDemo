import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/ProductService/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{


  constructor(private prdService : ProductsService, private router : Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  addProduct(){
    const newProduct = {
      id:51,
      name: "Camera",
      price: 600,
      quantity: 9,
      imageUrl: "https://source.unsplash.com/user/c_v_r/100x100",
      cateogryId: 3
    }
    const observer ={
      next : (prd:IProduct) =>{
        alert("product added susscefully") ;
        ///use toast / snackbar in angular instead of alert or bootstrap alert
        this.router.navigateByUrl("/product")},
      error :(err:Error) => {alert(err.message)},  
    }
    // this.prdService.addProduct(newProduct).subscribe((prd) =>{
    //   alert("product added susscefully") ;
    //   ///use toast / snackbar in angular instead of alert or bootstrap alert
    //   this.router.navigateByUrl("/product");
    // })
    this.prdService.addProduct(newProduct).subscribe(observer);
  }
}
