import { TestBed } from '@angular/core/testing';

import { ReservationMethodService } from './reservation-method.service';

describe('ReservationMethodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReservationMethodService = TestBed.get(ReservationMethodService);
    expect(service).toBeTruthy();
  });
});
