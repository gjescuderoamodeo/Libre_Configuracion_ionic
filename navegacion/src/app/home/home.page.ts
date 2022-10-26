import { Component, OnInit } from '@angular/core';
import { NavController, ViewDidEnter, ViewWillEnter, ViewWillLeave } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit,ViewWillEnter,ViewDidEnter,ViewWillLeave{

  constructor(private navCtrl: NavController){
    console.log('constructor home');
  }
  ionViewWillLeave(): void {
    console.log('ViewWillLeave home');
  }
  ionViewDidEnter(): void {
    console.log('ViewDidEnter home');
  }

  ionViewWillEnter(): void {
    console.log('ViewWillEnter home');
  }
  ngOnInit(): void {
    console.log('ngOnInit home');
  }

  goToPagina2(){
    this.navCtrl.navigateForward('/pagina2');
  }

  

}
