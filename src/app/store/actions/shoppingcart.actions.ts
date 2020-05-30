import {Action} from '@ngrx/store';
import {ActionTypes} from '../actiontypes';
import {IProduct} from '../../models/iproduct.models';
import { IShoppingCart } from 'src/app/models/ishoppingcart.model';


export class Add implements Action {
  public readonly type = ActionTypes.SHOPPINGCART_ADD
  constructor(public payload: IShoppingCart){}
}

export class Remove implements Action {
  public readonly type = ActionTypes.SHOPPINGCART_REMOVE
  // constructor( public payload: string ){}
  constructor( public payload: {_id:string,removeAll:boolean} ){}
}

export class ClearCart implements Action {
  public readonly type = ActionTypes.SHOPPINGCART_CLEAR
  // constructor( public payload: string ){}
  constructor( ){}
}


export type Actions = Add | Remove | ClearCart