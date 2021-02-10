import { Product } from './../../interfaces/product';
import { ApiCallsService } from './../../services/api-calls.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-single-product',
  templateUrl: './add-single-product.component.html',
  styleUrls: ['./add-single-product.component.scss']
})
export class AddSingleProductComponent implements OnInit {

  productData : FormGroup;
  constructor(private _api : ApiCallsService) { }

  ngOnInit(): void {
    this.productData = new FormGroup({
      product_name : new FormControl(null, [Validators.required] ),
      product_image : new FormControl(null, [Validators.required]),
      product_size : new FormArray([
        new FormGroup({
        size : new FormControl(null, [Validators.required]),
        mrp : new FormControl(null, [Validators.required]),
        price : new FormControl(null, [Validators.required])
      })]),
      brand_name : new FormControl(null, [Validators.required]),
      product_description : new FormControl(null)
    })

  }
  addSize(){
    (<FormArray>this.productData.get('product_size') ).push(
      new FormGroup({
      size : new FormControl(null, [Validators.required]),
      mrp : new FormControl(null, [Validators.required]),
      price : new FormControl(null, [Validators.required])
    }) )
    console.log(this.productData.get('product_size') )
  }
  get  getPSizeASArray(){
    return this.productData.get('product_size') as FormArray
  }

  addProduct(){
    const product : Product = this.productData.value;
    this._api.postSingleProduct(product).subscribe( (prod : Product)=>{
      console.log("Product Added Successfully...")
      console.log(prod)
    },err=>{
      console.log("Something Went Wrong...")
      console.log(err)
    },()=>{
      console.log("Action Completed Successfully")
    })
  }
  removeProductSize(index:number){
    let plen = (<FormArray>this.productData.get('product_size') ).length;
    if(plen > 1)
      this.getPSizeASArray.removeAt(index)
  }

}
