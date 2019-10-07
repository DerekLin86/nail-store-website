import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { ContentfulService } from '../share/service/contentful.service';
import { Price } from './price-list';

@Injectable()
export class PriceListService {
  public price$ = new BehaviorSubject<Price.API.ServerModel>({} as Price.API.ServerModel);

  constructor(
    private contentfulService: ContentfulService
  ) {
    this.initData();
  }

  public getData(): Observable<Price.API.ServerModel> {
    return from(this.contentfulService.getContent({
      contentId: 'price'
    }))
    .pipe(
      map((data) => {
        return data[0].fields as Price.API.ServerModel;
      })
    );
  }

  private initData() {
    this.getData()
      .subscribe((data) => {
        this.price$.next(data);
      });
  }

}
