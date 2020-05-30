// 
//  
// 
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

// import * as ProductCatalogActions from '../store/actions/product-catalog.actions';
import * as AuthenticateActions from '../store/actions/authenticate.actions';


@Injectable({
  providedIn: 'root'
})

export class LoginUserService {

  // länk till api
  private _baseUrl: string = 'http://localhost:9999/api/v1/users/login'

  constructor(private http: HttpClient, private store: Store) { }

  loginUser(loginUserData) {
    // this.http.post<any>(this._baseUrl,loginUser).subscribe(
    //   res => {
    //     console.log(res)
    //   },
    //   err => console.log(err)
    // )
 
    // console.log(loginUserData)
    // anropa funktion i store och lagra inloggad user
    this.store.dispatch(new AuthenticateActions.LoginUser(loginUserData))

  }



}






