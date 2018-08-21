import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { Camera } from '@ionic-native/camera';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


 
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { MatChipsModule } from '@angular/material/chips';
// import { MatIconModule } from '@angular/material/icon';
// import { MatSelectModule } from '@angular/material/select';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';
// import { MatCheckboxModule } from '@angular/material/checkbox';


import { HttpModule } from '@angular/http';




// import { RealEastatePage } from '../pages/real-eastate/real-eastate';
// import { AccountPage } from '../pages/account/account';
// import { SmsfPage } from '../pages/smsf/smsf';
// import { EascrowPage } from '../pages/eascrow/eascrow';
// import { MainPage } from '../pages/main/main';
// import { LoginPage } from '../pages/login/login';
// import { SignupPage } from '../pages/signup/signup';
// import { WelcomePage } from '../pages/welcome/welcome';
// import { SettingPage } from '../pages/setting/setting';
// import { TradeCenterPage } from '../pages/trade-center/trade-center';
// import { InitialLoginPage } from '../pages/initial-login/initial-login';
// import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
// import { ConfirmModalPage } from '../pages/confirm-modal/confirm-modal';
// import { IdVerifyPage } from '../pages/id-verify/id-verify';
// import { TransactionDetailPage } from '../pages/transaction-detail/transaction-detail';
// import { TransactionPage } from '../pages/transaction/transaction';
// import { EmailConfirmPage } from '../pages/email-confirm/email-confirm';
// import { PendingPage } from '../pages/pending/pending';
// import { PendingDetailPage } from '../pages/pending-detail/pending-detail';

import { FcmProvider } from '../providers/fcm/fcm';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { ServerProvider } from '../providers/server/server';

import { Firebase } from '@ionic-native/firebase';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { EscrowCompleteDetailPage } from '../pages/escrow-complete-detail/escrow-complete-detail';
// import { EscrowCompletePage } from '../pages/escrow-complete/escrow-complete';
// import { EscrowCreatePage } from '../pages/escrow-create/escrow-create';
// import { EscrowPendingDetailPage } from '../pages/escrow-pending-detail/escrow-pending-detail';
// import { EscrowPendingPage } from '../pages/escrow-pending/escrow-pending';

const firebase = {
  apiKey: "AIzaSyABnklED1Zls6MD5dJ2I7L8rdhRVLksjzM",
  authDomain: "digitalminingcorpau-dc32a.firebaseapp.com",
  databaseURL: "https://digitalminingcorpau-dc32a.firebaseio.com",
  projectId: "digitalminingcorpau-dc32a",
  storageBucket: "digitalminingcorpau-dc32a.appspot.com",
  messagingSenderId: "313767785609"
};

@NgModule({
  declarations: [
    MyApp,
    // LoginPage,
    // SignupPage,
    // WelcomePage,
    // RealEastatePage,
    // AccountPage,
    // SmsfPage,
    // EascrowPage,
    // MainPage,
    // SettingPage,
    // TradeCenterPage,
    // InitialLoginPage,
    // ForgotPasswordPage,
    // ConfirmModalPage,
    // IdVerifyPage,
    // TransactionDetailPage,
    // TransactionPage,
    // EmailConfirmPage,
    // PendingPage,
    // PendingDetailPage,
    // EscrowCompleteDetailPage,
    // EscrowCompletePage,
    // EscrowCreatePage,
    // EscrowPendingDetailPage,
    // EscrowPendingPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    // MatInputModule, MatButtonModule, MatChipsModule, MatIconModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // LoginPage,
    // SignupPage,
    // WelcomePage,
    // RealEastatePage,
    // AccountPage,
    // SmsfPage,
    // EascrowPage,
    // MainPage,
    // SettingPage,
    // TradeCenterPage,
    // InitialLoginPage,
    // ForgotPasswordPage,
    // ConfirmModalPage,
    // IdVerifyPage,
    // TransactionDetailPage,
    // TransactionPage,
    // EmailConfirmPage,
    // PendingPage,
    // PendingDetailPage,
    // EscrowCompleteDetailPage,
    // EscrowCompletePage,
    // EscrowCreatePage,
    // EscrowPendingDetailPage,
    // EscrowPendingPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    FingerprintAIO,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ServerProvider,
    InAppBrowser,
    Firebase,
    FcmProvider,
  ]
})
export class AppModule { }
