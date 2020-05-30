import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

import * as ProductActions from '../store/actions/product.actions';

import * as demo from '../data/demo';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _baseUrl: string = 'http://localhost:9999/api/v1/products/'

  constructor( private http: HttpClient, private store: Store ) { }

  getById(_id){
    // console.log(_id)
    this.http.get<any>(this._baseUrl+_id).subscribe(
      res =>{
        // console.log(res[0])
        this.store.dispatch(new ProductActions.Set(res[0]))
      } ,
      err => this.getDemoDataById(_id)
    )
  }

  clear(){
    this.store.dispatch(new ProductActions.Clear)
  }

  getDemoDataById(_id){
    this.store.dispatch(new ProductActions.Set(demo.productCatalog.find(i => i._id === _id)))
  }

}
