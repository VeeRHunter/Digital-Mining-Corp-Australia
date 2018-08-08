import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { FormControl, Validators } from '../../../node_modules/@angular/forms';
import { WelcomePage } from '../welcome/welcome';
import { ApiserverProvider } from '../../providers/apiserver/apiserver';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public loadingCtrl: LoadingController, public apiserver: ApiserverProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
    this.userData.firstName = "VeeR";
    this.userData.lastName = "Hunter";
    this.userData.email = "veerhunter127@gmail.com";
    this.userData.DOB = "2018-08-08";
    this.userData.country = "Australia";
    this.userData.address = "9 Road Lind address";
    this.userData.city = "Sidney";
    this.userData.password = "password1234";
    this.userData.repassword = "password1234";
    this.userData.pincode = "1234";
    this.userData.repincode = "1234";
    this.userData.state = "Sidney";
    this.userData.postalCode = "123456";
    this.userData.uniqueField = "unique1";
  }

  signUpUser(userProfile) {
    this.clickSignUp = true;
    console.log(userProfile);
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

}
