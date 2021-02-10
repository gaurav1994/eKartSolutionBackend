import { ApiCallsService } from './../../services/api-calls.service';
import { Product } from './../../interfaces/product';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-view-single-product',
  templateUrl: './view-single-product.component.html',
  styleUrls: ['./view-single-product.component.scss']
})
export class ViewSingleProductComponent implements OnInit {

  
  id :string;
  product : Product;
  productSizes = {
    size : '',
    mrp : 0,
    price : 0
  }
  constructor(private _activeRoute : ActivatedRoute, private _api : ApiCallsService) { }

  ngOnInit(): void {
    console.log(this.product)
    this._activeRoute.paramMap.subscribe((params : ParamMap)=>{
      this.id = params.get('productid')
      this._api.getSingleProduct(this.id).subscribe((product : Product)=>{
        console.log(product)
        this.product = product
        this.productSizes = this.product.productSize[0]
      },error=>{
        console.log(error)
      })
    })
  }
  onSelectSize(value ){
    let val = JSON.parse(value)
    this.productSizes = val
  }
}
