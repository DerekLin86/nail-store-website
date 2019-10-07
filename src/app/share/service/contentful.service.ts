import { Injectable } from '@angular/core';
import * as marked from 'marked';
import { createClient, Entry } from 'contentful';

import { environment } from '../../../environments/environment';

@Injectable()
export class ContentfulService {
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  constructor() { }

  public getContent(arg: {
    contentId: string;
    query?: object;
  }): Promise<any> {
    return this.client.getEntries(Object.assign({
      content_type: arg.contentId
    }, arg.query)).then(res => res.items);
  }

  public markdownToHtml(md: any) {
    if (md) {
      return marked(md);
    }
  }

}
