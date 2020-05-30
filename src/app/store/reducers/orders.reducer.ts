// 
//  orders.reducer
// 
import {ActionTypes} from '../actiontypes';
import {Actions} from '../actions/orders.actions';
import {IOrders} from '../../models/iorders.models';

export interface State {
  orders: IOrders
  error: string
}

const initialState: State = {
  orders: {
    orders:[],
    count: 0
  } ,
  error: ''
}


// här exporterar vi en reducer UserOrdersReducer som används i app.module.ts
// där vi importerar och anväder i StoreModule.forRoot....
export function UserOrdersReducer(state: State = initialState, action: Actions){

  switch (action.type) {
    case ActionTypes.USER_ORDERS_SET:
      
      return {
        ...state,
        orders: action.payload
      }

    case ActionTypes.USER_ORDERS_CLEAR:
      return {
        ...state,
        orders: [],
        count: 0
      }

    default:
      return state
  }

}














