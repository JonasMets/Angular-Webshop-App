// 
//  
// 
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

//
import * as AuthenticateActions from '../store/actions/authenticate.actions';
import * as OrdersActions from '../store/actions/orders.actions';
import * as ShoppingCartActions from '../store/actions/shoppingcart.actions';


@Injectable({
  providedIn: 'root'
})

export class LogOutUserService {

  constructor(private http: HttpClient, private store: Store, private router : Router) { }

  logOutUser() {
    
    // anropa funktion i store och loggar ut user
    this.store.dispatch(new AuthenticateActions.LogOutUser())
    // anropar funktion i store för att rensa kund ordrar
    this.store.dispatch(new OrdersActions.ClearUserOrders())
    // anropar funktion i store för att rensa shoppingcart
    this.store.dispatch(new ShoppingCartActions.ClearCart())
    // gå till någon sida
    this.router.navigate(['']);

  }



}






