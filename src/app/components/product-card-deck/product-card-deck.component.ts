import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models/iproduct.models';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.models';
// import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-card-deck',
  templateUrl: './product-card-deck.component.html',
  styleUrls: ['./product-card-deck.component.css']
})
export class ProductCardDeckComponent implements OnInit {

  // skapar en productcatalog med typen IProduct
  public productcatalog : Observable<Array<IProduct>>

  constructor( private store: Store<IState> ) { }

  ngOnInit(): void {
    this.productcatalog = this.store.select(store => store.productcatalog)
  }

}
