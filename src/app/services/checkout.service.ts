// 
// 
// 

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  

  constructor( private http: HttpClient ) { }



  createNewOrder(newOrder) {
    // skicka vidare data till databas
    // länk till api
    const _baseUrl: string = 'http://localhost:9999/api/v1/orders'

    this.http.post<any>(_baseUrl, newOrder).subscribe(
      res => {

      },
      err => {

      }
    )
  }
}
