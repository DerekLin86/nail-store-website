import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationMethodComponent } from './reservation-method.component';

describe('ReservationMethodComponent', () => {
  let component: ReservationMethodComponent;
  let fixture: ComponentFixture<ReservationMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
