import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, Validators } from '../../../node_modules/@angular/forms';
import { WelcomePage } from '../welcome/welcome';
import { LoginPage } from '../login/login';

/**
 * Generated class for the InitialLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-initial-login',
  templateUrl: 'initial-login.html',
})
export class InitialLoginPage {

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
    console.log('ionViewDidLoad InitialLoginPage');
  }


  Login(userProfile) {
    this.clickSignUp = true;
    console.log(userProfile);
    if (userProfile.valid) {
      this.navCtrl.push(LoginPage);
    }
  }

}
