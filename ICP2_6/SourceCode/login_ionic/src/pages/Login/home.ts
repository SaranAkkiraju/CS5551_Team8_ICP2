import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AboutPage} from "../SignUp/about";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  newUser(){
    this.navCtrl.push(AboutPage);
  }
}
