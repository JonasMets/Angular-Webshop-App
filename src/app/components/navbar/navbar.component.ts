import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // skapar en property som är en Observable 
  // tar emot data från store.shoppingcart.totalCartQuantity
  public shoppingCartItemCount: Observable<any>

  public _userName: Observable<any>
  public _isAuthenticated: Observable<boolean>

  // initierar en store i constructorn för att kunna användas av klassen
  constructor(private store: Store<IState>) { }

  ngOnInit(): void {
    // tilldelar data från storen
    this.shoppingCartItemCount = this.store.select(store => store.shoppingcart.totalCartQuantity)
    this._userName = this.store.select(store => store.userAuthReducer.currentUser.firstName)
    this._isAuthenticated = this.store.select(store => store.userAuthReducer.isAuthenticated)
  }

}
