import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from} from 'rxjs';
import { map } from 'rxjs/operators';

import { Information } from './information';
import { ContentfulService } from '../share/service/contentful.service';

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  public information$ = new BehaviorSubject<Information.API.ServerModel>({} as Information.API.ServerModel);

  constructor(
    private contentfulService: ContentfulService
  ) {
    this.initData();
  }

  public getData(): Observable<Information.API.ServerModel> {
    return from(this.contentfulService.getContent({
      contentId: 'information'
    }))
      .pipe(
        map((data) => {
          return data[0].fields as Information.API.ServerModel;
        })
      );
  }

  private initData() {
    this.getData()
      .subscribe((data) => {
        this.information$.next(data);
      });
  }
}
