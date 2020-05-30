// 
// 
// 
import {Actions} from '../actions/product-catalog.actions';
import {ActionTypes} from '../actiontypes';
import {IProduct} from '../../models/iproduct.models';

const initialState : Array<IProduct>= []

export function ProductCatalogreducer(state = initialState, action: Actions){
  switch (action.type) {
    case ActionTypes.PRODUCTCATALOG_SET:
      return state = action.payload

    case ActionTypes.PRODUCTCATALOG_CLEAR:
      return state = initialState
  
    default:
      return state
  }
}













