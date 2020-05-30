

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LandingpageComponent } from './views/landingpage/landingpage.component';
// import { ProductsComponent } from './views/products/products.component';
import { ProductCatalogViewComponent } from './views/product-catalog-view/product-catalog-view.component';
import { NotFound404Component } from './views/not-found404/not-found404.component';
import { ProductViewComponent } from './views/product-view/product-view.component';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CustomerOrdersComponent } from './views/customer-orders/customer-orders.component';
import { ApprouteguardGuard } from './approuteguard.guard';
import { CustomerProfileComponent } from './views/customer-profile/customer-profile.component';


const routes: Routes = [

  // default/start sida som visas om inget annat väljs
  {path:'', component: LandingpageComponent},
  // {path:'products', component: ProductsComponent}
  {path:'products', component: ProductCatalogViewComponent},
  {path:'products/:_id', component: ProductViewComponent},
  // CheckoutComponent
  {path:'checkout', component: CheckoutComponent, canActivate:[ApprouteguardGuard]},
  // CustomerOrdersComponent
  {path:'customerorders', component: CustomerOrdersComponent, canActivate:[ApprouteguardGuard]},
  // RegisterFormComponent
  {path:'register', component: RegisterFormComponent},
  // LoginFormComponent
  {path:'login', component: LoginFormComponent},
  // customerprofile
  {path:'customerprofile', component: CustomerProfileComponent, canActivate:[ApprouteguardGuard]},
  //  NotFound404Component
  { path: '**', component: NotFound404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
