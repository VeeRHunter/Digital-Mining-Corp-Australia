import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RealEastatePage } from '../real-eastate/real-eastate';
import { TradeCenterPage } from '../trade-center/trade-center';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  public orgInvestment: any;
  public dailyYield: any;
  public liveFeed: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
    this.orgInvestment = 3000000;
    this.dailyYield = 82.19178990;
    this.liveFeed = this.orgInvestment + this.dailyYield;
    this.calculateLiveFeed();
  }

  calculateLiveFeed() {
    setTimeout(() => {
      this.liveFeed = this.liveFeed + this.dailyYield / 24 / 60 / 60;
      this.calculateLiveFeed();
    }, 1000);
  }

  liveFeedCall() {
    console.log("liveFeedCall");
  }

  accessCode() {
    console.log("accessCode");
  }

  clickBuy() {
    console.log("clickBuy");
    this.navCtrl.push(TradeCenterPage);
    localStorage.setItem("tradeType", "buy");
  }

  clickSell() {
    console.log("clickSell");
    this.navCtrl.push(TradeCenterPage);
    localStorage.setItem("tradeType", "sell");
  }

  gotoRealEstate() {
    this.navCtrl.push(RealEastatePage);
  }

}
