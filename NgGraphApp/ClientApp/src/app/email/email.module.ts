import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailRoutingModule } from './email-routing.module';
import { ListEmailsComponent } from './list-emails/list-emails.component';


@NgModule({
  declarations: [
    ListEmailsComponent
  ],
  imports: [
    CommonModule,
    EmailRoutingModule
  ]
})
export class EmailModule { }
