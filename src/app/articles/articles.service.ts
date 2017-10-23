import { Injectable } from '@angular/core';

@Injectable()
export class ArticlesService {

  constructor() { }

  getLatestArticles(): Promise<any[]> {
    return Promise.resolve([
      {
        title: 'Article 1',
        content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium`,
        isArchived: false,
      },
      {
        title: 'Article 2',
        content: `Test`,
        isArchived: true,
      },
    ]);
  }

}
