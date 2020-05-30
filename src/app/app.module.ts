import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';

import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//
import { environment } from '../environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingpageComponent } from './views/landingpage/landingpage.component';



import { ProductCatalogreducer } from './store/reducers/product-catalog.reducer';
import { ProductReducer } from './store/reducers/product.reducer';
import { ShoppingCartReducer } from './store/reducers/shoppingcart.reducer';
import { ProductCardDeckComponent } from './components/product-card-deck/product-card-deck.component';
import { ProductCatalogViewComponent } from './views/product-catalog-view/product-catalog-view.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { NotFound404Component } from './views/not-found404/not-found404.component';
import { CartComponent } from './components/shoppingcart/cart/cart.component';
import { CartProductsComponent } from './components/shoppingcart/cart-products/cart-products.component';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { UserAuthReducer } from './store/reducers/authenticate.reducer';
import { CustomerOrdersComponent } from './views/customer-orders/customer-orders.component';
import { UserOrdersReducer } from './store/reducers/orders.reducer';
import { OrdersCardDeckComponent } from './components/orders/orders-card-deck/orders-card-deck.component';
import { OrdersCardComponent } from './components/orders/orders-card/orders-card.component';
import { OrdersCardItemsComponent } from './components/orders/orders-card-items/orders-card-items.component';
import { CustomerProfileComponent } from './views/customer-profile/customer-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingpageComponent,
    ProductCatalogViewComponent,
    ProductCardDeckComponent,
    ProductCardComponent,
    NotFound404Component,
    CartComponent,
    CartProductsComponent,
    CheckoutComponent,
    RegisterFormComponent,
    UserMenuComponent,
    LoginFormComponent,
    LoginFormComponent,
    CustomerOrdersComponent,
    OrdersCardDeckComponent,
    OrdersCardComponent,
    OrdersCardItemsComponent,
    CustomerProfileComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      productcatalog: ProductCatalogreducer,
      product: ProductReducer,
      shoppingcart: ShoppingCartReducer,
      // UserAuthReducer
      userAuthReducer: UserAuthReducer,
      userOrdersReducer: UserOrdersReducer
      //
      // 
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
