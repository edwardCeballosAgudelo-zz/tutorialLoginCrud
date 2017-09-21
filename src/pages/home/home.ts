import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductServicesProvider } from "../../providers/product-services/product-services";
import { NewProductPage } from "../new-product/new-product";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  token: string;
  products: string[];

  constructor(public navCtrl: NavController, private navParams: NavParams,
    public productServices: ProductServicesProvider) {
    this.token = navParams.get('token');
  }

  ngOnInit() {
    this.getProducts();
  }

  deleteProduct(id){
    this.productServices.deleteProduct(this.token,id).then((pdct) => {
      let respuesta = JSON.parse(pdct["_body"]);  
      this.products = respuesta.products;     
    }).catch((err) => {
      console.log(err);
    })
  }

  newProduct(){
    this.navCtrl.setRoot(NewProductPage, {
      token: this.token
    });   
  }

  getProducts() {
    this.productServices.getProduct(this.token).then((pdct) => {
      let respuesta = JSON.parse(pdct["_body"]);  
      this.products = respuesta.products;     
    }).catch((err) => {
      console.log(err);
    })
  }

}
