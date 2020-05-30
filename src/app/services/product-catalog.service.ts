// 
//  
// 
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as demo from '../data/demo'; 

import * as ProductCatalogActions from '../store/actions/product-catalog.actions';


@Injectable({
  providedIn: 'root'
})

export class ProductCatalogService {

  // länk till api
  private _baseUrl: string = 'http://localhost:9999/api/v1/products'

  constructor(private http: HttpClient, private store: Store) { }

  get() {
    this.http.get<any>(this._baseUrl).subscribe(
      res => this.store.dispatch(new ProductCatalogActions.Set(res.data)),
      err => this.getDemoData()
    )
  }

  clear() {
    this.store.dispatch(new ProductCatalogActions.Clear())
  }

  getDemoData() {
    this.store.dispatch(new ProductCatalogActions.Set(demo.productCatalog))
  }

}






