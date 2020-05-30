import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.models';
import { IShoppingCart } from 'src/app/models/ishoppingcart.model';

import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { CheckoutService } from '../../services/checkout.service';
import { HttpClient } from '@angular/common/http';
import { IUser } from 'src/app/models/iuser.models';
import { Router } from '@angular/router';

import {ShoppingCartService} from '../../services/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public shoppingCart: Observable<Array<IShoppingCart>>;

  public _cart: Array<IShoppingCart>

  public totalCartAmount: Observable<any>;

  public _total: Number

  public _user: IUser

  public checkOutForm: FormGroup

  public countries: Array<string>
  public cities: Array<string>

  public errorMsg: string

  constructor(private store: Store<IState>, private formBuilder: FormBuilder, 
    private checkoutService: CheckoutService, private shoppingCartService: ShoppingCartService,
    private http: HttpClient , private router : Router ) { }

  ngOnInit(): void {
    this.shoppingCart = this.store.select(store => store.shoppingcart.shoppingcart)
    //
    this.totalCartAmount = this.store.select(store => store.shoppingcart.totalCartAmount)
    // 
    this.store.select(store => store.shoppingcart.shoppingcart).subscribe(res => this._cart = res)
    this.store.select(store => store.shoppingcart.totalCartAmount).subscribe(res => this._total = res)


    this.store.select(store => store.userAuthReducer.currentUser).subscribe(res => this._user = res)


    this.countries = ['Sverige', 'Norge', 'Finland', 'Danmark']
    this.cities = ['Stockholm', 'Oslo', 'Helsinki', 'Köpenhamn']

    // initierar regForm som en FormGroup som sedan kan användas
    // i html koden med formControlName="xxxxx"
    // initierar regForm med Validators för validering
    this.checkOutForm = this.formBuilder.group(
      {
        firstName: [this._user.firstName, [Validators.required, Validators.minLength(2)]],
        lastName: [this._user.lastName, [Validators.required, Validators.minLength(2)]],
        email: [this._user.email, [Validators.required, Validators.email]],

        addressLine: ['', [Validators.required]],
        zipCode: ['', [Validators.pattern('[0-9]{5}')]],
        country: ['', [Validators.required]],
        city: ['', [Validators.required]],
        acceptTerms: [false, [Validators.requiredTrue]]
      }
    )

  }
  // init end


  submitOrder() {
    // event.preventDefault()
    console.log('submit order')


    if (this._total <= 0) {
      // inga produkter i shoppingcart
      this.errorMsg = 'Inga produkter i din kundvagn, lägg till produkter'
      return
    }

    // const orderData = { product:'banan' }
    const newOrder = {
      userId: this._user.id,
      userData: this._user,
      shippingData: this.checkOutForm.value,
      orderItems: this._cart,
      orderTotalAmount: this._total,
      orderStatus: 'created'
    };
    // console.log(newOrder)

    const _baseUrl: string = 'http://localhost:9999/api/v1/orders'
    const options = {
      headers:{
        'Content-Type': 'application/json'
        ,
        'Authorization': 'bearer ' + sessionStorage.getItem('token')
      }
    }

    this.http.post<any>(_baseUrl, newOrder,options).subscribe(
      res => {
        // console.log(res)
        this.checkOutForm.reset();
        // rensa cart store
        this.shoppingCartService.clearCart();
        // gå till någon sida typ checkoutsuccess
        this.router.navigate(['products']);
      },
      err => {
        console.log(err)
        this.errorMsg = 'Kunde inte skapa en order, kontrollera data'
      }
    )


  }

}
