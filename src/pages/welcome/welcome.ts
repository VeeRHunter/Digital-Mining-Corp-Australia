import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RealEastatePage } from '../real-eastate/real-eastate';
import { AccountPage } from '../account/account';
import { SmsfPage } from '../smsf/smsf';
import { EascrowPage } from '../eascrow/eascrow';
import { MainPage } from '../main/main';
import { InitialLoginPage } from '../initial-login/initial-login';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  public logedTime = "05.53";
  public logedDate = "Monday 16 july 2018";
  public logedTimezone = "GMT +10.00";

  public lastLoginUserName = "";
  public lastLoginTime = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
    this.lastLoginUserName = localStorage.getItem("lastLoginName");
    this.lastLoginTime = localStorage.getItem("lastLoginTime");
  }

  logOff() {
    localStorage.setItem("loged", "");
    this.navCtrl.setRoot(InitialLoginPage);
  }
  gotoRealEstate() {
    this.navCtrl.push(MainPage);
  }
  gotoAccount() {
    this.navCtrl.push(AccountPage);
  }
  gotoSMSF() {
    this.navCtrl.push(SmsfPage);
  }
  gotoEscrow() {
    this.navCtrl.push(EascrowPage);
  }

}
