import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { ContentfulService } from '../share/service/contentful.service';
import { Note } from './note';

@Injectable()
export class NoteService {
  public note$ = new BehaviorSubject<Note.API.ServerModel>({} as Note.API.ServerModel);

  constructor(
    private contentfulService: ContentfulService
  ) {
    this.initData();
  }

  public getData() {
    return from(this.contentfulService.getContent({contentId: 'notice'}))
      .pipe(
        map((data) => {
          return data[0].fields as Note.API.ServerModel;
        })
      );
  }

  private initData() {
    this.getData()
      .subscribe((data) => {
        this.note$.next(data);
      });
  }
}
