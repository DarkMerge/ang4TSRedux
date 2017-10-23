import { Component, OnInit } from '@angular/core';

import { ArticlesService } from '../articles/articles.service';

import { ArticleModel } from '../articles/article-model';

@Component({
  selector: 'app-dashboard',
  providers: [ ArticlesService ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  articles: ArticleModel[];

  constructor(private articlesService: ArticlesService) {
    console.log(articlesService);
  }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articlesService.getLatestArticles().then(articles => {
      this.articles = articles;
    });
  }

}
