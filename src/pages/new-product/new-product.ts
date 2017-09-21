import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductServicesProvider } from "../../providers/product-services/product-services";
import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: 'page-new-product',
  templateUrl: 'new-product.html',
})
export class NewProductPage {
  token: string;
  name : string;
  picture : string;
  price : string;
  category : string;
  description : string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public productService: ProductServicesProvider) {
    this.token = navParams.get('token');    
  }

  saveProducts() {
    let postParams = {
      name : this.name,
      picture : this.picture,
      price : this.price,
      category : this.category,
      description : this.description,
    }
    this.productService.newProduct(this.token,postParams).then((pdct) => {
      alert(pdct["statusText"]);
      this.navCtrl.setRoot(HomePage, {
        token: this.token
      });    
    }).catch((err) => {
      console.log(err);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewProductPage');
  }

}