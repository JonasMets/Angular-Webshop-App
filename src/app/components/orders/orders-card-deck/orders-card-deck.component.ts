import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.models';
import { Observable } from 'rxjs';
import { IOrders } from 'src/app/models/iorders.models';

@Component({
  selector: 'app-orders-card-deck',
  templateUrl: './orders-card-deck.component.html',
  styleUrls: ['./orders-card-deck.component.css']
})
export class OrdersCardDeckComponent implements OnInit {

  public customerOrders: IOrders

  constructor(private store: Store<IState>) { }

  ngOnInit(): void {
    // this.customerOrders = this.store.select(store => store.userOrdersReducer)
    // this.store.select(store => store.userAuthReducer.currentUser).subscribe(res => this._user = res)
    this.store.select(store => store.userOrdersReducer.orders).subscribe(res => this.customerOrders = res)
    console.log(this.customerOrders)
    console.log(this.customerOrders.orders)
  }

}
