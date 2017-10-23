import { Injectable } from '@angular/core';

import { ArticleModel } from './article-model';

import * as moment from 'moment';

@Injectable()
export class ArticlesService {

  constructor() { }

  getLatestArticles(): Promise<ArticleModel[]> {
    return Promise.resolve([
      {
        title: 'Article 1',
        content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium`,
        isArchived: false,
        date: moment().format('DD/MM/YYYY - hh:mm:ss')
      },
      {
        title: 'Article 2',
        content: `Test`,
        isArchived: true,
      },
    ]);
  }

}
