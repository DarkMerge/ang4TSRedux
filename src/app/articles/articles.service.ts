import { Injectable } from '@angular/core';

@Injectable()
export class ArticlesService {

  constructor() { }

  getLatestArticles() {
    return [
      {
        title: 'Article 1',
        content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium`
      }
    ];
  }

}
