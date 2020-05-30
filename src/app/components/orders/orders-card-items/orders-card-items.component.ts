import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-orders-card-items',
  templateUrl: './orders-card-items.component.html',
  styleUrls: ['./orders-card-items.component.css']
})
export class OrdersCardItemsComponent implements OnInit {

  // @Input() gör så att man kan ta emot data från en "parent" component
  @Input() item

  constructor() { }

  ngOnInit(): void {
  }

}
