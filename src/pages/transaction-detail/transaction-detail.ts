import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController } from 'ionic-angular';
import { ServerProvider } from '../../providers/server/server';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { EmailConfirmPage } from '../email-confirm/email-confirm';

/**
 * Generated class for the TransactionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction-detail',
  templateUrl: 'transaction-detail.html',
})
export class TransactionDetailPage {

  public userData = { "email": "", "apiState": "sendPDFFile", "pdfURL": "" };

  public originalInvestment: any;
  public searchDate: any;
  public dateIconName: any;

  public transactionData: any;
  public options: InAppBrowserOptions = {
    location: 'yes',//Or 'no' 
    hidden: 'no', //Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',//Android only ,shows browser zoom controls 
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', //Android only 
    closebuttoncaption: 'Close', //iOS only
    disallowoverscroll: 'no', //iOS only 
    toolbar: 'yes', //iOS only 
    enableViewportScale: 'no', //iOS only 
    allowInlineMediaPlayback: 'no',//iOS only 
    presentationstyle: 'pagesheet',//iOS only 
    fullscreen: 'yes',//Windows only    
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser,
    public loadingCtrl: LoadingController, public toastCtrl: ToastController, public apiserver: ServerProvider, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionDetailPage');
    console.log(localStorage.getItem("useremail"));
    console.log(JSON.parse(localStorage.getItem("selectedTransaction")));
    this.ionicInit();
  }

  back() {
    this.navCtrl.pop();
  }

  ionicInit() {
    this.transactionData = JSON.parse(localStorage.getItem("selectedTransaction"));
    this.originalInvestment = localStorage.getItem("originalInvestment");
    this.userData.email = localStorage.getItem("useremail");
  }

  viewPDF() {
    var pdfurl = 'https://docs.google.com/gview?embedded=true&url=' + this.transactionData.tranPDF;
    let target = "_blank";
    this.iab.create(encodeURI(pdfurl), target, this.options);
  }

  emailPDF() {
    // this.userData.pdfURL = this.transactionData.tranPDF;
    // let loading = this.loadingCtrl.create({
    //   content: "Please Wait..."
    // });
    // loading.present();
    // this.apiserver.postData(this.userData).then(result => {
    //   loading.dismiss();
    //   console.log(result);
    //   let toast = this.toastCtrl.create({
    //     message: Object(result).detail,
    //     duration: 2000
    //   });
    //   toast.present();
    // }, error => {
    //   loading.dismiss();
    //   let toast = this.toastCtrl.create({
    //     message: "No Network",
    //     duration: 2000
    //   });
    //   toast.present();
    // });    
    let modal = this.modalCtrl.create(EmailConfirmPage);
    modal.onDidDismiss(data => {
      console.log(data);
      if (data != "" && typeof (data) != "undefined") {
        let toast = this.toastCtrl.create({
          message: data,
          duration: 3000
        });
        toast.present();
      }
    });
    modal.present();
  }

}
