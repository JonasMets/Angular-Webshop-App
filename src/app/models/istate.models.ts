// 
//  
// 

import { IProduct } from './iproduct.models';
import { IShoppingCart } from './ishoppingcart.model';

import * as fromCartReducer from '../store/reducers/shoppingcart.reducer';
import * as fromUserAuthReducer from '../store/reducers/authenticate.reducer';
import * as fromUserOrdersReducer from '../store/reducers/orders.reducer';

// definierar hur en del av state ser ut
// används bla. i class ProductGridComponent där vi tittar på State store.productcatalog
export interface IState {
  readonly productcatalog: Array<IProduct>
  readonly product: IProduct
  // readonly shoppingcart: Array<IShoppingCart>
  shoppingcart: fromCartReducer.State
  userAuthReducer: fromUserAuthReducer.State
  userOrdersReducer: fromUserOrdersReducer.State
}