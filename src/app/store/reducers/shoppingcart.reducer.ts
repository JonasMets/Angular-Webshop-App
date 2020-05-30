// 
//  shoppingcart.reducer.ts
// 

import { Actions } from '../actions/shoppingcart.actions';
import { ActionTypes } from '../actiontypes';
// import {IProduct} from '../../models/iproduct.models';
import { IShoppingCart } from 'src/app/models/ishoppingcart.model';


// här sätter vi initialState till att vara en Array av typen IShoppingCart
// typen bestäms i ishoppingcart.model.ts

// original funkar
// const initialState : Array< IShoppingCart> = []

export interface State {
  shoppingcart: Array<IShoppingCart>
  totalCartQuantity: number
  totalCartAmount: number
  error: string
}

const initialState: State = {
  shoppingcart: [],
  totalCartQuantity: 0,
  totalCartAmount: 0,
  error: ''
}


// här exporterar vi en reducer ShoppingCartReducer som används i app.module.ts
// där vi importerar och anväder i StoreModule.forRoot....
export function ShoppingCartReducer(state: State = initialState, action: Actions) {

  let itemIndex

  switch (action.type) {
    case ActionTypes.SHOPPINGCART_ADD:

      let newproduct = action.payload;
      // console.log(newproduct)
      try {

        itemIndex = state.shoppingcart.findIndex(product => product.product._id === newproduct.product._id)
        // console.log(itemIndex)
        if (itemIndex < 0) {
          state = {
            ...state,
            shoppingcart: [...state.shoppingcart, action.payload],
          }
        } else {

          const cartItem = state.shoppingcart[itemIndex];
          const updatedCartItem = {
            ...cartItem,
            quantity: cartItem.quantity + 1
          };
          const updatedIngredients = [...state.shoppingcart];
          updatedIngredients[itemIndex] = updatedCartItem;

          // return
          state = {
            ...state,
            shoppingcart: updatedIngredients,
          };

        }

      } catch (error) {

      }

      state.totalCartQuantity = getTotalQuantity(state.shoppingcart)
      state.totalCartAmount = getTotalAmount(state.shoppingcart)
      return state

    case ActionTypes.SHOPPINGCART_REMOVE:
      let _id = action.payload._id;
      let removeAll = action.payload.removeAll;
      // console.log('remove', _id, removeAll )

      try {
        itemIndex = state.shoppingcart.findIndex(product => product.product._id === _id)
        // console.log(itemIndex)
        console.log('removeAll', removeAll)
        if (removeAll) {
          // return
          state = {
            ...state,
            shoppingcart: state.shoppingcart.filter(item => item.product._id !== _id)
          }

        } else {

          const cartItem = state.shoppingcart[itemIndex];

          if (cartItem.quantity === 1) {
            // return
            state = {
              ...state,
              shoppingcart: state.shoppingcart.filter(item => item.product._id !== _id),
            }
          } else {
            const updatedCartItem = {
              ...cartItem,
              quantity: cartItem.quantity - 1
            };
            const updatedIngredients = [...state.shoppingcart];
            updatedIngredients[itemIndex] = updatedCartItem;
            // return
            state = {
              ...state,
              shoppingcart: updatedIngredients,
            };
          }

        }

      } catch (error) {

      }

      state.totalCartQuantity = getTotalQuantity(state.shoppingcart)
      state.totalCartAmount = getTotalAmount(state.shoppingcart)
      return state

    case ActionTypes.SHOPPINGCART_CLEAR:

      state = {
        shoppingcart: [],
        totalCartQuantity: 0,
        totalCartAmount: 0,
        error: ''
      }

      return state


    default:
      return state
  }
}


// funktioner som används av reducer

const getTotalQuantity = (items) => {
  let totalQuantity = 0

  // console.log(items)

  items.forEach(product => {
    totalQuantity += product.quantity
  });

  return totalQuantity
}

const getTotalAmount = (items) => {
  let totalAmount = 0

  items.forEach(item => {
    // console.log(item.product.price)
    totalAmount += item.product.price * item.quantity
  });

  return totalAmount
}
