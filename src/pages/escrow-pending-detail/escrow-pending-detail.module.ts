import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EscrowPendingDetailPage } from './escrow-pending-detail';

@NgModule({
  declarations: [
    EscrowPendingDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(EscrowPendingDetailPage),
  ],
})
export class EscrowPendingDetailPageModule {}
