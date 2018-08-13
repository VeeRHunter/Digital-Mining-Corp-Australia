import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailConfirmPage } from './email-confirm';

@NgModule({
  declarations: [
    EmailConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(EmailConfirmPage),
  ],
})
export class EmailConfirmPageModule {}
