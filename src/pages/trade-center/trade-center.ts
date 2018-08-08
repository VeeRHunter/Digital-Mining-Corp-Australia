import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

/**
 * Generated class for the TradeCenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trade-center',
  templateUrl: 'trade-center.html',
})
export class TradeCenterPage {
  @ViewChild(Content) content: Content;

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
  public showEditEquityValue = false;
  public jointlyOwned: boolean;

  public equitySwapValue: any;
  public equityPercent: any;
  public balanceEquityValue: any;
  public dmcShareValue: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TradeCenterPage');
    this.smallPageTitle = "FREE HOLD";
    this.addressName = "4 Ellis Place, mountain creek, QUEENSLAND 4557";
    this.currentMV = "$360000";
    // this.equityValue = "$200000";
    // this.debtValue = "$160000";
    // this.swapsValue = "0.00%";
    this.buildingImage = "assets/imgs/house.jpg";
    this.noProperty = true;
    this.equityPercent = "10.00%";
    this.balanceEquityValue = "90%";
    if (localStorage.getItem("tradeType") == "buy") {
      this.jointlyOwned = true;
      this.smallPageTitle = "FREE HOLD";
      this.equityValue = "100%";
      this.debtTitle = "";
      this.debtValue = "";
    } else {
      this.jointlyOwned = false;
      this.smallPageTitle = "UNDER MORTGAGE";
      this.equityValue = "$200000";
      this.debtValue = "$160000";
      this.debtTitle = "Debt Balance";
    }
    this.equitySwapValue = this.currentMV.replace("$", "");
    if (this.equityValue.includes("%")) {
      this.swichEquity = true;
    } else {
      this.swichEquity = false;
    }
  }

  focusOnEquityValue() {
    console.log("Focus On");
    // let itemTop = inputEquity._elementRef.nativeElement.getBoundingClientRect().top;
    let itemTop = document.getElementById('inputEquity').offsetTop;
    let itemPositionY = this.content.getContentDimensions().scrollTop + itemTop;
    console.log(itemTop);
    console.log(itemPositionY);
    this.content.scrollTo(null, itemPositionY, 500);
    this.showEditEquityValue = true;
  }

  focusOutEquityValue() {
    console.log("focusOutEquityValue");
    this.showEditEquityValue = false;
  }

  checkEquityValue() {
  }

  openEditValue() {
    // openEditValue.setfocus();
    this.showEditEquityValue = true;
  }

  goback() {
    this.navCtrl.pop();
  }

}
