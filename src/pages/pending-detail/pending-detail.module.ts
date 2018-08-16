import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendingDetailPage } from './pending-detail';

@NgModule({
  declarations: [
    PendingDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PendingDetailPage),
  ],
})
export class PendingDetailPageModule {}
