import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from '../models/istate.models';

import * as ShoppingCartActions from '../store/actions/shoppingcart.actions';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor( private store: Store<IState> ) { }

add(product, quantity){

  this.store.dispatch(new ShoppingCartActions.Add({product,quantity}) )
}

remove(id,removeAll=false){
  // this.store.dispatch(new ShoppingCartActions.Remove(id))
  this.store.dispatch(new ShoppingCartActions.Remove({_id:id,removeAll:removeAll}))
}

clearCart(){
  this.store.dispatch(new ShoppingCartActions.ClearCart())
}


}
