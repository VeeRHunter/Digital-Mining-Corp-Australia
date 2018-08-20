import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EscrowCompletePage } from './escrow-complete';

@NgModule({
  declarations: [
    EscrowCompletePage,
  ],
  imports: [
    IonicPageModule.forChild(EscrowCompletePage),
  ],
})
export class EscrowCompletePageModule {}
