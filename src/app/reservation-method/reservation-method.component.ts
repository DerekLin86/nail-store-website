import { Component, OnInit } from '@angular/core';

import { ReservationMethodService } from './reservation-method.service';

@Component({
  selector: 'app-reservation-method',
  templateUrl: './reservation-method.component.html',
  styleUrls: ['./reservation-method.component.scss']
})
export class ReservationMethodComponent implements OnInit {

  public reservation$ = this.reservationMethodService.reservation$;

  constructor(
    public reservationMethodService: ReservationMethodService
  ) { }

  ngOnInit() { }

}
