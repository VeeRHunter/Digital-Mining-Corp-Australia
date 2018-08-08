import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


import { HttpModule, Http } from '@angular/http';




import { RealEastatePage } from '../pages/real-eastate/real-eastate';
import { AccountPage } from '../pages/account/account';
import { SmsfPage } from '../pages/smsf/smsf';
import { EascrowPage } from '../pages/eascrow/eascrow';
import { MainPage } from '../pages/main/main';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { WelcomePage } from '../pages/welcome/welcome';
import { SettingPage } from '../pages/setting/setting';
import { TradeCenterPage } from '../pages/trade-center/trade-center';
import { InitialLoginPage } from '../pages/initial-login/initial-login';
import { ApiserverProvider } from '../providers/apiserver/apiserver';
import { HttpClientModule } from '../../node_modules/@angular/common/http';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    WelcomePage,
    RealEastatePage,
    AccountPage,
    SmsfPage,
    EascrowPage,
    MainPage,
    SettingPage,
    TradeCenterPage,
    InitialLoginPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    MatInputModule, MatButtonModule, MatChipsModule, MatIconModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    WelcomePage,
    RealEastatePage,
    AccountPage,
    SmsfPage,
    EascrowPage,
    MainPage,
    SettingPage,
    TradeCenterPage,
    InitialLoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    FingerprintAIO,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiserverProvider
  ]
})
export class AppModule { }
