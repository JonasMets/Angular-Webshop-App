import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersCardItemsComponent } from './orders-card-items.component';

describe('OrdersCardItemsComponent', () => {
  let component: OrdersCardItemsComponent;
  let fixture: ComponentFixture<OrdersCardItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersCardItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersCardItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
