export interface Product {
     _id  : string,
     productName : string,
     productImage : string,
     productSize : [{ size : string , mrp : number, price : number }],
     productBrandName : string,
     productDiscription : string
}
