import { Routes } from '@angular/router';

export const routes: Routes = [
  {
  path: 'issues',
    loadComponent: () => import('./modules/pages/issue/issue.component').then(c => c.IssueComponent)
  },
  {
    path: 'issue/:number', loadComponent: () => import('./modules/pages/issue-list/issue-list.component').then(c => c.IssueListComponent)
  },
  {
    path: '**', redirectTo: 'issues', pathMatch: 'full'
  }
];
