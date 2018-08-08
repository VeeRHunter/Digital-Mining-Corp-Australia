import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '../../../node_modules/@angular/common/http';

/*
  Generated class for the ApiserverProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


let apiurl:string = "http://192.168.2.108/qrscanner/apiserver";
// let apiurl:string = "http://traxprint.asia/index.php";
// let apiurl:string = "http://traxverifier.com/qrscanner/apiserver/index1.php";




@Injectable()
export class ApiserverProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiserverProvider Provider');
  }

  postData(credentials) {
    // console.log(credentials);
    return new Promise((resolve, reject) => {       

      this.http.post(apiurl, credentials).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
      
    });
  }

}
