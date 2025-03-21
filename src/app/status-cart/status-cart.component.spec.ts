import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusCartComponent } from './status-cart.component';

describe('StatusCartComponent', () => {
  let component: StatusCartComponent;
  let fixture: ComponentFixture<StatusCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatusCartComponent]
    });
    fixture = TestBed.createComponent(StatusCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
