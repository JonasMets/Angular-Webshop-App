import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-orders-card',
  templateUrl: './orders-card.component.html',
  styleUrls: ['./orders-card.component.css']
})
export class OrdersCardComponent implements OnInit {

  // @Input() gör så att man kan ta emot data från en "parent" component
  @Input() order

  constructor() { }

  ngOnInit(): void {
  }

}
