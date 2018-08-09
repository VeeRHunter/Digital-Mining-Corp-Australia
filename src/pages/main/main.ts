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

  public realLiveFeed: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
    this.orgInvestment = 3000000;
    this.dailyYield = 82.19178990;
    this.realLiveFeed = this.orgInvestment + this.dailyYield;
    this.liveFeed = this.changeToDecimal(this.orgInvestment + this.dailyYield);
    // console.log(this.orgInvestment.toFixed(2));
    this.calculateLiveFeed();
  }

  calculateLiveFeed() {
    setTimeout(() => {
      this.realLiveFeed = this.realLiveFeed + this.dailyYield / 24 / 60 / 60;
      this.liveFeed = this.changeToDecimal(this.realLiveFeed);
      this.calculateLiveFeed();
    }, 1000);
  }

  changeToDecimal(inputData) {
    return parseFloat(inputData).toFixed(2);
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
