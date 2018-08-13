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
import {MatCheckboxModule} from '@angular/material/checkbox';


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
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { ServerProvider } from '../providers/server/server';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { ConfirmModalPage } from '../pages/confirm-modal/confirm-modal';
import { IdVerifyPage } from '../pages/id-verify/id-verify';
import { TransactionDetailPage } from '../pages/transaction-detail/transaction-detail';
import { TransactionPage } from '../pages/transaction/transaction';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { EmailConfirmPage } from '../pages/email-confirm/email-confirm';



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
    ForgotPasswordPage,
    ConfirmModalPage,
    IdVerifyPage,
    TransactionDetailPage,
    TransactionPage,
    EmailConfirmPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    MatInputModule, MatButtonModule, MatChipsModule, MatIconModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule,
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
    ForgotPasswordPage,
    ConfirmModalPage,
    IdVerifyPage,
    TransactionDetailPage,
    TransactionPage,
    EmailConfirmPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    FingerprintAIO,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ServerProvider,
    InAppBrowser,
  ]
})
export class AppModule { }
