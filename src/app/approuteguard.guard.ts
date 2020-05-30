import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IState } from './models/istate.models';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApprouteguardGuard implements CanActivate {

  constructor(private store: Store<IState>, private router: Router) { }

  public _isAuthenticated: boolean

  // ngOnInit(): void {
  //   this.store.select(store => store.userAuthReducer.isAuthenticated).subscribe(res => this._isAuthenticated = res)
  //   console.log(this._isAuthenticated)
  // }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    this.store.select(store => store.userAuthReducer.isAuthenticated).subscribe(res => this._isAuthenticated = res)
    // return this._isAuthenticated
    if (this._isAuthenticated) {
      return true
    } else {
      // skicka till login
      return this.router.createUrlTree(['login'])
    }

  }

}
