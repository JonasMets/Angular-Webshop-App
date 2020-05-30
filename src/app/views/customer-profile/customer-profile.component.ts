import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.models';
import { IUser } from 'src/app/models/iuser.models';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  public _user: IUser

  constructor( private store: Store<IState> ) { }

  ngOnInit(): void {
    this.store.select(store => store.userAuthReducer.currentUser).subscribe(res => this._user = res)
  }

}
