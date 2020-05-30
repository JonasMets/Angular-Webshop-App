

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { CustomerOrdersService } from '../../services/customer-orders.service';
import { IState } from 'src/app/models/istate.models';
import { IUser } from 'src/app/models/iuser.models';



@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})

export class CustomerOrdersComponent implements OnInit {

  public _user: IUser

  constructor(private store: Store<IState>, private customerOrdersService: CustomerOrdersService) { }

  ngOnInit(): void {
    this.store.select(store => store.userAuthReducer.currentUser).subscribe(res => this._user = res)

    this.customerOrdersService.get(this._user.id)

  }

}
