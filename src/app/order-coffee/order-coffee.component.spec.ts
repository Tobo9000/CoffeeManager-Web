import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCoffeeComponent } from './order-coffee.component';

describe('OrderCoffeeComponent', () => {
  let component: OrderCoffeeComponent;
  let fixture: ComponentFixture<OrderCoffeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCoffeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
