import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, ModalController, LoadingController, ToastController } from 'ionic-angular';
import { ConfirmModalPage } from '../confirm-modal/confirm-modal';
import { ServerProvider } from '../../providers/server/server';

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

  public swapMax: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
    public loadingCtrl: LoadingController, public toastCtrl: ToastController, public apiserver: ServerProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TradeCenterPage');
    this.smallPageTitle = "FREE HOLD";
    this.addressName = "4 Ellis Place, mountain creek, QUEENSLAND 4557";
    this.currentMV = (360000).toFixed(2);
    // this.equityValue = "$200000";
    // this.debtValue = "$160000";
    // this.swapsValue = "0.00%";
    this.buildingImage = "assets/imgs/house.jpg";
    this.noProperty = true;
    this.equityPercent = (10.00).toFixed(2);
    this.balanceEquityValue = (90).toFixed(2);
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
    this.equitySwapValue = (parseFloat(this.currentMV) * 0.95).toFixed(2);
    if (this.equityValue.includes("%")) {
      this.swichEquity = true;
    } else {
      this.swichEquity = false;
    }
    this.swapMax = (parseFloat(this.currentMV) * 0.95).toFixed(2);
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
    this.equitySwapValue = parseFloat(this.equitySwapValue).toFixed(2);
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

  confirmTrade() {
    let modal = this.modalCtrl.create(ConfirmModalPage);
    modal.onDidDismiss(data => {
      console.log(data);
      if (data == "success") {
        let toast = this.toastCtrl.create({
          message: "Success Confirm",
          duration: 3000
        });
        toast.present();
      }
    });
    modal.present();
  }

}
