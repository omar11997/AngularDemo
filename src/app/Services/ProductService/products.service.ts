import { HttpClient ,HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { IProduct } from 'src/app/Models/iproduct';
import { enviroment } from 'src/enviroments/enviroments';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  ///////Handle the Api service 
  //////all the methods return observables and you will subscribe it in the component 
  ////httpOptions resposible for the handling of the header configurration of the method 
  httpOptions;
  constructor(private httpClient:HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        ///Authorization: 'my-auth-token'
      })
    };
   }

  getAllProducts():Observable<IProduct[]>
  {
   return this.httpClient.get<IProduct[]>(`${enviroment.APIURL}/products`);
  }
  getproductsByCatId(catId:number):Observable<IProduct[]>
  {
    if(catId == 0 ) return this.httpClient.get<IProduct[]>(`${enviroment.APIURL}/products`);
    return this.httpClient.get<IProduct[]>(`${enviroment.APIURL}/products?cateogryId=${catId}`);
  }
  getProductById(productId:number):Observable<IProduct>
  {
    return this.httpClient.get<IProduct>(`${enviroment.APIURL}/products/${productId}`);
  }
  addProduct(newPrd:IProduct):Observable<IProduct>
  {
    //return this.httpClient.post<IProduct>(`${enviroment.APIURL}/products`,JSON.stringify(newPrd),this.httpOptions) ; 
    ////Best practice{Pipe will return the same observable after handing any thing }
    return this.httpClient
    .post<IProduct>(`${enviroment.APIURL}/products`,JSON.stringify(newPrd),this.httpOptions)
    //////use the pipe function used to handle error in the service 
    .pipe(
      retry(3),
      ////this method send obj from HttpErrorResponse type
      catchError(this.handleError)

    );
  }
  updateProduct(prdId:number,newPrd:IProduct){}
  deleteProduct(){}

////This mthod  comes from the doc to hanlde errors
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
