import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { ListEmailsComponent } from './list-emails/list-emails.component';

const routes: Routes = [
  {
    component: ListEmailsComponent,
    path: 'list-emails',
    canActivate: [
      MsalGuard
    ]
  },
  {
    path: '',
    redirectTo: 'list-emails',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule { }
