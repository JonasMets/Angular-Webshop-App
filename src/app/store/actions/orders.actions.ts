// 
//  orders.actions
// 
import {Action} from '@ngrx/store';
import {ActionTypes} from '../actiontypes';
import { IOrders } from 'src/app/models/iorders.models';


export class GetUserOrders implements Action {
  public readonly type = ActionTypes.USER_ORDERS_SET
  constructor(public payload: IOrders ){}
}

export class ClearUserOrders implements Action {
  public readonly type = ActionTypes.USER_ORDERS_CLEAR
  constructor(){}
}


export type Actions = GetUserOrders | ClearUserOrders








