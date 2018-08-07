import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { WelcomePage } from '../welcome/welcome';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public pin1 = "";
  public pin2 = "";
  public pin3 = "";
  public pin4 = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  changeInput1(input2, event) {
    console.log(event);
    console.log("event");
    if (this.pin1.length == 1) {
      // this.input2.setFocus();
      localStorage.setItem("input1", this.pin1);
      input2.setFocus();
    }
    else if (this.pin1.length > 1) {
      this.pin1 = this.pin1.slice(0, -1);
    }
  }

  changeInput2(input1, input3, event) {
    console.log(event);
    // let input2 = 
    if (this.pin2.length == 1) {
      // this.input3.setFocus();
      localStorage.setItem("input2", this.pin2);
      input3.setFocus();
    } else if (this.pin2 == "") {
      // this.input1.setFocus();
      if (localStorage.getItem("input2").length == 1) {
        localStorage.setItem("input2", "");
      } else {
        input1.setFocus();
      }
    }
    else {
      this.pin2 = this.pin2.slice(0, -1);
    }
  }

  changeInput3(input2, input4, event) {
    console.log(event);
    // let input2 = 
    if (this.pin3.length == 1) {
      // this.input4.setFocus();
      localStorage.setItem("input3", this.pin3);
      input4.setFocus();
    } else if (this.pin3 == "") {
      // this.input2.setFocus();
      if (localStorage.getItem("input3").length == 1) {
        localStorage.setItem("input3", "");
      } else {
        input2.setFocus();
      }
    }
    else {
      this.pin3 = this.pin3.slice(0, -1);
    }
  }

  changeInput4(input3, event) {
    console.log(event);
    // let input2 = 
    if (this.pin4 == "") {
      // this.input3.setFocus();
      if (localStorage.getItem("input4").length == 1) {
        localStorage.setItem("input4", "");
      } else {
        input3.setFocus();
      }
    }
    else if (this.pin4.length == 1) {
      // this.keyboard.close();
      localStorage.setItem("input4", this.pin4);
    }
    else {
      this.pin4 = this.pin4.slice(0, -1);
    }
  }

  checkCode() {
    console.log("login");
    if (this.pin1 != "" && this.pin2 != "" && this.pin3 != "" && this.pin4 != "") {
      this.navCtrl.push(WelcomePage);
    } else {
      let toast = this.toastCtrl.create({
        message: 'Please input pin code',
        duration: 3000,
        position: 'top'
      });

      toast.present();
    }
  }

  gotoSignup() {
    this.navCtrl.push(SignupPage);
  }

}
