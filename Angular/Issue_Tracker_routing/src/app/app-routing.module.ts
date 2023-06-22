import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssueComponent } from './issue/issue.component';
import { IssuesListComponent } from './issues-list/issues-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'addissue', pathMatch: 'full' },
  { path: 'addissue', component: IssueComponent },
  { path: 'issueslist', component: IssuesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
