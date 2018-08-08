import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TradeCenterPage } from './trade-center';

@NgModule({
  declarations: [
    TradeCenterPage,
  ],
  imports: [
    IonicPageModule.forChild(TradeCenterPage),
  ],
})
export class TradeCenterPageModule {}
