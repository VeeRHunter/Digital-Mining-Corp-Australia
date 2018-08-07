import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, Validators } from '../../../node_modules/@angular/forms';
import { WelcomePage } from '../welcome/welcome';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  public emailFormControl = new FormControl('', [
    Validators.email,
    Validators.required
  ]);

  public rePasswordControl = new FormControl('', [
    Validators.required
  ]);

  public pinControl = new FormControl('', [
    Validators.required,
    Validators.pattern("[0-9]{4}")
  ])
  public rePinControl = new FormControl('', [
    Validators.required
  ]);

  public userData = { "firstName": "", "lastName": "", "email": "", "DOB": "", "address": "", "city": "", "state": "", "country": "", "postalCode": "", "uniqueField": "", "password": "", "repassword": "", "pincode": "", "repincode": "" };

  public countryList = ["Australia", "United State"];
  public uniqueList = ["unique1", "unique2"];

  public clickSignUp = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signUpUser(userProfile) {
    this.clickSignUp = true;
    console.log(userProfile);
    if (userProfile.valid && this.userData.password == this.userData.repassword && this.userData.pincode == this.userData.repincode) {
      this.navCtrl.push(WelcomePage);
    }
  }

  goback() {
    this.navCtrl.pop();
  }

  clickDOB() {
    console.log("asdfasdfasdf");
    window.scrollTo(0, 0);
  }

}
