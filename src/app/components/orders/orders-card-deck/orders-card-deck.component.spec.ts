import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersCardDeckComponent } from './orders-card-deck.component';

describe('OrdersCardDeckComponent', () => {
  let component: OrdersCardDeckComponent;
  let fixture: ComponentFixture<OrdersCardDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersCardDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersCardDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
