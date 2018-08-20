import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EscrowCompleteDetailPage } from './escrow-complete-detail';

@NgModule({
  declarations: [
    EscrowCompleteDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(EscrowCompleteDetailPage),
  ],
})
export class EscrowCompleteDetailPageModule {}
