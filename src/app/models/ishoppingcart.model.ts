// 
//  ishoppingcart.model.ts
// 

import { IProduct } from './iproduct.models';


// här beskriver man hur en IShoppingCart ska se ut/innehålla 
//  initialState får sedan värdet av IShoppingCart
export interface IShoppingCart {
  product: IProduct
  quantity: number
  
}







