import { Product } from './../../interfaces/product';
import { ApiCallsService } from './../../services/api-calls.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent implements OnInit {

  constructor(private _api : ApiCallsService) { }

  products : Product[] ;
  ngOnInit(): void {
    this._api.getAllProducts().subscribe( (prod : {count : number , products : Product[] } )=>{
      console.log(prod)
      this.products = prod.products
    },error=>{
      console.log(error)
    },()=>{
      console.log("Everything so fine")
    })
  }
  deleteSingleProduct(productId : string){
    this._api.deleteSingleProduct(productId).subscribe(res=>{
      console.log("Product Deleted Successfully")
      this.products = this.products.filter(product=>{
        return product._id != productId
      })
    },error=>{
      console.log("Something Went Wrong")
    },()=>{
      console.log("App isSmothly running ...")
    })
  }

}
