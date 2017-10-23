import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorizationComponent } from './core/authorization/authorization.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateArticleComponent } from './articles/create-article/create-article.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'login',
    component: AuthorizationComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'create-article',
    component: CreateArticleComponent
  },
  /*
  { path: 'hero/:id',      component: HeroDetailComponent },
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
