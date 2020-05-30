import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.models';
import { Observable } from 'rxjs';
// import { IShoppingCart } from 'src/app/models/ishoppingcart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // public shoppingCart: Observable<Array<IShoppingCart>>
  public shoppingCart: Observable<{ shoppingcart }>;

  public totalCartAmount: Observable<any> ;

  public _isAuthenticated: Observable<boolean>

  constructor(private store: Store<IState>) { }

  ngOnInit(): void {
    // this.shoppingCart = this.store.select(store => store.shoppingcart)
    this.shoppingCart = this.store.select('shoppingcart')
    // this.totalCartAmount = this.store.select(store => store.shoppingcart.totalCartAmount)
    this.totalCartAmount = this.store.select(store => store.shoppingcart.totalCartAmount)
    this._isAuthenticated = this.store.select(store => store.userAuthReducer.isAuthenticated)


    // test
    // this.shoppingCart.subscribe(
    //   res =>{
    //     console.log(res.shoppingcart)
    //   } ,
    //   err => console.error('Observer got an error: ' + err),
    //   () => console.log('Observer got a complete notification')
    // )

    // this.totalCartAmount.subscribe(
    //   res =>{
    //     console.log(res)
    //   } ,
    //   err => console.error('Observer got an error: ' + err),
    //   () => console.log('Observer got a complete notification')
    // )

  }

}
