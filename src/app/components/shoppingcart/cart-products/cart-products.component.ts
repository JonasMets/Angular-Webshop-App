import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.css']
})
export class CartProductsComponent implements OnInit {

  // @Input() gör så att man kan ta emot data från en "parent" component
  @Input() cartItem

  constructor( private shoppingcartService: ShoppingCartService ) { }

  ngOnInit(): void {
  }


  // ökar antalet av samma produkt i shoppingcart
  addToCart(){
    event.stopPropagation();
    console.log('add')
    // console.log(this.cartItem.product)
    this.shoppingcartService.add(this.cartItem.product, 1)
  }

  removeFromCart(){
    event.stopPropagation();
    this.shoppingcartService.remove(this.cartItem.product._id,false)
  }

  removeAll(){
    event.stopPropagation();
    console.log('removeAll')
    this.shoppingcartService.remove(this.cartItem.product._id,true)
  }

}
