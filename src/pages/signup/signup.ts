import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { FormControl, Validators } from '../../../node_modules/@angular/forms';
import { WelcomePage } from '../welcome/welcome';
import { ServerProvider } from '../../providers/server/server';
// import { ApiserverProvider } from '../../providers/apiserver/apiserver';

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

  public userData = { "firstName": "", "lastName": "", "email": "", "DOB": "", "address": "", "city": "", "state": "", "country": "", "postalCode": "", "uniqueField": "", "password": "", "repassword": "", "pincode": "", "repincode": "", "apiState": "signup" };

  public countryList = ["Australia", "United State"];
  public uniqueList = ["unique1", "unique2"];

  public clickSignUp = false;

  public switchUnique = true;
  public uniquePlace: any;

  public yearList: any[];
  public currentYear: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public loadingCtrl: LoadingController, public apiserver: ServerProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
    this.uniquePlace = "Unique Field";
    this.yearList = new Array();
    this.currentYear = parseInt(new Date().toLocaleDateString().split("/")[2]);
    for (let i = 1950; i < this.currentYear + 1; i++) {
      this.yearList.push(i);
    }
    console.log(this.yearList);
  }

  signUpUser(userProfile) {
    this.clickSignUp = true;
    if (userProfile.valid && this.userData.password == this.userData.repassword && this.userData.pincode == this.userData.repincode) {
      console.log(JSON.stringify(this.userData));
      console.log(this.userData);
      let loading = this.loadingCtrl.create({
        content: "Please Wait..."
      });
      loading.present();
      this.apiserver.postData(this.userData).then((result) => {
        loading.dismiss();
        console.log(Object(result));
        if (Object(result).status == "success") {
          localStorage.setItem("loged", "login");
          localStorage.setItem("useremail", this.userData.email);
          this.navCtrl.push(WelcomePage);
        } else {
          let toast = this.toastCtrl.create({
            message: Object(result).detail,
            duration: 2000
          })
          toast.present();
        };

      }, (err) => {
        let toast = this.toastCtrl.create({
          message: "No Network",
          duration: 2000
        })
        toast.present();
        loading.dismiss();
      });
    }
  }

  goback() {
    this.navCtrl.pop();
  }

  clickDOB() {
    console.log("asdfasdfasdf");
    window.scrollTo(0, 0);
  }

  selectCountry() {
    if (this.userData.country == "United State") {
      this.uniquePlace = "Social Security Number";
    }
    else if (this.userData.country == "Australia") {
      this.uniquePlace = "Tax File Number";
    }
    else {
      this.uniquePlace = "Unique Field";
    }
    console.log(this.userData.country);
    console.log(this.switchUnique);
  }

}
