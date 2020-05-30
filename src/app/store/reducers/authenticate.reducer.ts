// 
//  authenticate.reducer
// 

import { Actions } from '../actions/authenticate.actions';
import { ActionTypes } from '../actiontypes';
import { IUser } from 'src/app/models/iuser.models';

// {_id?: string
// firstName?: string
// lastName?: string
// email?: string
// userRole?: number}

export interface State {
  isAuthenticated: boolean
  currentUser: IUser,
  token: string
  error: string
}

const initialState: State = {
  isAuthenticated: false,
  currentUser: {},
  token: '',
  error: ''
}


export function UserAuthReducer(state: State = initialState, action: Actions) {

  switch (action.type) {

    case ActionTypes.USER_LOGIN:

      // console.log(action.payload.token)
      // console.log(action.payload.user)


      state = {
        ...state,
        isAuthenticated: true,
        currentUser: action.payload.user,
        token: action.payload.token
      }
      // token
      sessionStorage.setItem('token', state.token)
      // user
      sessionStorage.setItem('user', JSON.stringify(state.currentUser) )
      // 
      sessionStorage.setItem('auth', JSON.stringify(state.isAuthenticated) )

      return state

    case ActionTypes.USER_AUTHENTICATED:

      return {
        ...state
      }
    case ActionTypes.USER_LOGOUT:

      sessionStorage.clear()
      return {
        ...state,
        isAuthenticated: false,
        currentUser: {},
        token: ''
      }

    default:

    // hämta från localstorage
    let _token = (sessionStorage.getItem('token'))
    let _user = JSON.parse(sessionStorage.getItem('user'))
    let _auth = JSON.parse(sessionStorage.getItem('auth'))
      if (_token && _user && _auth) {
        return{
          ...state,
          token: _token,
          currentUser: _user,
          isAuthenticated: _auth
        }
      }

      // returnerar default state
      return state
  }

  // return state

}







