// 
//  customer-orders.service
// 

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Store } from '@ngrx/store';

import * as OrdersActions from '../store/actions/orders.actions';


@Injectable({
  providedIn: 'root'
})


export class CustomerOrdersService {


  constructor( private http: HttpClient , private store: Store ) { }

  // länk till api
  //                           '/orders/customer/' + customerId
  private _baseUrl: string = 'http://localhost:9999/api/v1/orders/customer/'

  get(customerId) {
    const options = {
      headers:{
        'Content-Type': 'application/json'
        ,
        'Authorization': 'bearer ' + sessionStorage.getItem('token')
      }
    }
    this.http.get<any>(this._baseUrl+customerId, options).subscribe(
      res => {
        // console.log(res)
        // console.log(res.count)
        // console.log(res.data)

        // kallar på action i /store/actions/orders.actions
        // som skickar data till reducern
        this.store.dispatch(new OrdersActions.GetUserOrders({orders:res.data,count: res.count }))

      } ,
      err => {
        console.log(err)
      } 
    )
  }

}
