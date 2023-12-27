import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericApiHandlerService {

  constructor(private httpClient:HttpClient) { }

  getAll(){

  }
  getById(id:number){}

  post(newOject:any){}

  put(id:number,newOject:any){

  }
  delete(id:number){}
}
