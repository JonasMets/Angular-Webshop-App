// 
//  
// 
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

// import * as ProductCatalogActions from '../store/actions/product-catalog.actions';


@Injectable({
  providedIn: 'root'
})

export class RegisterUserService {

  // länk till api
  private _baseUrl: string = 'http://localhost:9999/api/v1/users/register'

  constructor(private http: HttpClient, private store: Store) { }

  creatUser(newUser) {
    this.http.post<any>(this._baseUrl,newUser).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
  }

  

}






