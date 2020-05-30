import { IProduct } from '../models/iproduct.models';


export const productCatalog: Array <IProduct> = [
  {_id: '1', name: 'Demo Product 1', description:'Demo product', price: 100},
  {_id: '2', name: 'Demo Product 2', description:'Demo product', price: 200},
  {_id: '3', name: 'Demo Product 3', description:'Demo product', price: 300},
  {_id: '4', name: 'Demo Product 4', description:'Demo product', price: 400}
]

export const users : Array<any> = [
  {id:'1', firstName: 'Bob', lastName:'Doe', email:'bob.doe@doe.com', passWord:'1234', role:'user'}
]