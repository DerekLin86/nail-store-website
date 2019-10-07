import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ContentfulService } from '../share/service/contentful.service';
import { Reservation } from './reservation-method';

@Injectable()
export class ReservationMethodService {
  public reservation$ = new BehaviorSubject<Reservation.API.ServerModel>({} as Reservation.API.ServerModel);

  constructor(
    private contentfulService: ContentfulService
  ) {
    this.initData();
  }

  private getData(): Observable<Reservation.API.ServerModel> {
    return from(this.contentfulService.getContent({ contentId: 'reservation' }))
      .pipe(
        map((data) => {
          return data[0].fields as Reservation.API.ServerModel;
        })
      );
  }

  private initData() {
    this.getData()
      .subscribe((data) => {
        this.reservation$.next(data);
      });
  }
}
