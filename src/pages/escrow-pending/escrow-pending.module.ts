import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EscrowPendingPage } from './escrow-pending';

@NgModule({
  declarations: [
    EscrowPendingPage,
  ],
  imports: [
    IonicPageModule.forChild(EscrowPendingPage),
  ],
})
export class EscrowPendingPageModule {}
