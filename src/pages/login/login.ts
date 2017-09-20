import { sample } from 'rxjs/operator/sample';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { LoginServicesProvider } from '../../providers/login-services/login-services';
import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public user: User

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public loginService: LoginServicesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    console.log(this.user.email)
    let postParams = {
      email : this.user.email
    }
    this.loginService.login(postParams)
    .then((user)=>{
      console.log(user);
    }).catch((err)=>{
      console.log(err);
    })
  }
}
