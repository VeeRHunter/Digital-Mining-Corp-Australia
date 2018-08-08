import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Events, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { WelcomePage } from '../pages/welcome/welcome';
import { MainPage } from '../pages/main/main';
import { RealEastatePage } from '../pages/real-eastate/real-eastate';
import { SettingPage } from '../pages/setting/setting';
import { AccountPage } from '../pages/account/account';
import { SmsfPage } from '../pages/smsf/smsf';
import { EascrowPage } from '../pages/eascrow/eascrow';
import { TradeCenterPage } from '../pages/trade-center/trade-center';
import { InitialLoginPage } from '../pages/initial-login/initial-login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = InitialLoginPage;

  public pages: Array<{ title: string, component: any, image: string }>;
  public bottom_pages: Array<{ title: string, component: any, image: string }>;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.ionicInit();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
  openPage(page) {
    if (page.title == "Log Out") {
      this.nav.setRoot(InitialLoginPage);
      localStorage.setItem("loged", "");
    } else {
      this.nav.push(page.component);
    }
  }

  ionicInit() {

    this.pages = [
      { title: 'Home', component: WelcomePage, image: "md-home" },
      { title: 'Live Feed', component: MainPage, image: "md-globe" },
      { title: 'Real Estate', component: RealEastatePage, image: "md-card" },
      { title: 'Account', component: AccountPage, image: "md-person" },
      { title: 'SMSF', component: SmsfPage, image: "md-card" },
      { title: 'Escrow', component: EascrowPage, image: "md-card" },
      { title: 'Setting', component: SettingPage, image: "md-settings" },
      { title: 'Log Out', component: null, image: "md-log-out" },
      // { title: 'my_devices', component: MyDevicesPage, image: "devices" }
    ];

  }
}

