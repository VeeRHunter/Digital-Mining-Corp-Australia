import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InitialLoginPage } from './initial-login';

@NgModule({
  declarations: [
    InitialLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(InitialLoginPage),
  ],
})
export class InitialLoginPageModule {}
