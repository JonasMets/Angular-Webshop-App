// 
//  user-menu.component
// 
import { Component, OnInit } from '@angular/core';

import {LogOutUserService} from '../../services/logout-user.service';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  public _isAuthenticated: Observable<boolean>

  constructor( private logOutUserService: LogOutUserService, private store: Store<IState> ) { }

  ngOnInit(): void {
    this._isAuthenticated = this.store.select(store => store.userAuthReducer.isAuthenticated)
  }

  // funktion för att logga ut
  logOutUser(){
    console.log('log out')
    this.logOutUserService.logOutUser()
  }



}
