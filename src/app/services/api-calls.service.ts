import { Product } from './../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  readonly baseUrl = "http://localhost:3000/";
  constructor(private _http : HttpClient) { }
  // get all products
  getAllProducts() : Observable<any>{
    return this._http.get<any>(`${this.baseUrl}products/`)
  }
  // get single product based on product id in url
  getSingleProduct(productId) :Observable<Product>{
    return this._http.get<Product>(`${this.baseUrl}products/${productId}`)
  }
  // post single product
  postSingleProduct(product : Product): Observable<Product>{
    return this._http.post<Product>(`${this.baseUrl}products/`, product)
  }
  //Delete A Single Product 

  deleteSingleProduct(productId : string): Observable<any>{
    return this._http.delete<any>(`${this.baseUrl}products/${productId}`)
  }
}
