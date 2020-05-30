import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.models';

import {ActivatedRoute} from '@angular/router';
import { IProduct } from 'src/app/models/iproduct.models';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  public product : IProduct

  constructor(private router : ActivatedRoute, 
    private productService: ProductService, 
    private store: Store<IState> ,
    private shoppingcartService: ShoppingCartService ) { }

  ngOnInit(): void {

    this.productService.clear()
    this.productService.getById(this.router.snapshot.params._id)
    this.store.select(store => store.product).subscribe(res => this.product =res )

  }

  addToCart(product, quantity = 1){
    // console.log(product, quantity)
    this.shoppingcartService.add(product, quantity)
  }

}
