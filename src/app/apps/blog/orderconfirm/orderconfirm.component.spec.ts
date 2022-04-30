import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderconfirmComponent } from './orderconfirm.component';

describe('OrderconfirmComponent', () => {
  let component: OrderconfirmComponent;
  let fixture: ComponentFixture<OrderconfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderconfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
