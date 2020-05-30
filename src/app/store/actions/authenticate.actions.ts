// 
//  authenticate.actions
// 
import {Action} from '@ngrx/store';
import {ActionTypes} from '../actiontypes';

// import {IUser} from '../../models/iuser.models';


export class LoginUser implements Action {
  public readonly type = ActionTypes.USER_LOGIN
  constructor(public payload: {token, user } ){}
}

export class LogOutUser implements Action {
  public readonly type = ActionTypes.USER_LOGOUT
  constructor( ){}
}


export class UserAuthenticated implements Action {
  public readonly type = ActionTypes.USER_AUTHENTICATED
  constructor( ){}
}


export type Actions = LoginUser | LogOutUser | UserAuthenticated
