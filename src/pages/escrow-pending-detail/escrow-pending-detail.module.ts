import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EscrowPendingDetailPage } from './escrow-pending-detail';

 
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    EscrowPendingDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(EscrowPendingDetailPage),
    MatInputModule, MatButtonModule, MatChipsModule, MatIconModule, MatSelectModule, 
    MatDatepickerModule, MatNativeDateModule, MatCheckboxModule,
  ],
})
export class EscrowPendingDetailPageModule {}
