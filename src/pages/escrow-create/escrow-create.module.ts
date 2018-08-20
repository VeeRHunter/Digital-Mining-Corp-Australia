import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EscrowCreatePage } from './escrow-create';

@NgModule({
  declarations: [
    EscrowCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(EscrowCreatePage),
  ],
})
export class EscrowCreatePageModule {}
