import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Category } from './index';
import { ContentfulService } from '../share/service/contentful.service';


@Injectable()
export class IndexService {
  public category$ = new BehaviorSubject<Array<Category.API.ServerModel>>([]);

  constructor(
    private contentfulService: ContentfulService
  ) {
    this.initCategoryList();
  }

  private getCategories(): Observable<Array<Category.API.ServerModel>> {
    return from(this.contentfulService.getContent({ contentId: 'category' }))
      .pipe(
        map((data) => {
          return data.map((category) => category.fields as Category.API.ServerModel)
            .sort((c1: Category.API.ServerModel, c2: Category.API.ServerModel) => c1.orderNumber - c2.orderNumber);
        })
      );
  }

  private initCategoryList() {
    this.getCategories()
      .subscribe((categories) => {
        this.category$.next(categories);
      });
  }
}
