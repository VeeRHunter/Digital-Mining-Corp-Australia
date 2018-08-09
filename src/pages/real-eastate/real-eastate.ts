import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TradeCenterPage } from '../trade-center/trade-center';

/**
 * Generated class for the RealEastatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-real-eastate',
  templateUrl: 'real-eastate.html',
})
export class RealEastatePage {

  public smallPageTitle: any;
  public addressName: any;
  public currentMV: any;
  public equityValue: any;
  public debtValue: any;
  public swapsValue: any;

  public debtTitle: any;
  public buildingImage: any;

  public swichEquity: boolean;
  public noProperty: boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RealEastatePage');
    this.smallPageTitle = "FREE HOLD";
    this.addressName = "4 Ellis Place, mountain creek, QUEENSLAND 4557";
    this.currentMV = "$360000";
    this.equityValue = "$200000";
    this.debtValue = "$160000";
    this.swapsValue = "0.00%";
    this.debtTitle = "Debt Balance";
    this.buildingImage = "assets/imgs/house.jpg";
    console.log(this.swapsValue.includes("%"));
    if (this.equityValue.includes("%")) {
      this.swichEquity = true;
    } else {
      this.swichEquity = false;
    }
    this.noProperty = true;
  }

  jointlyBuilding() {
    console.log("jointlyBuilding");
  }

  gotoRealEstate() {
    this.navCtrl.push(RealEastatePage);
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

  accessCode() {
    console.log("accessCode");
  }

  findEstateAgent() {
    console.log("findEstateAgent");
    this.noProperty = false;
    if (this.equityValue.includes("%")) {
      this.swichEquity = true;
    } else {
      this.swichEquity = false;
    }
  }

}
