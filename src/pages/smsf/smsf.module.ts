import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmsfPage } from './smsf';

@NgModule({
  declarations: [
    SmsfPage,
  ],
  imports: [
    IonicPageModule.forChild(SmsfPage),
  ],
})
export class SmsfPageModule {}
