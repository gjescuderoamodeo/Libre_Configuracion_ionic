import { Component } from '@angular/core';
import { producto } from './producto';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  P1 = new producto("1234d","Manzanas",23);
  P2 = new producto("125t","Platanos",25);
  P3 = new producto("14ui","Kiwis",236);
  P4 = new producto("1234d","Sandías",2);
  P5 = new producto("hk-412m","Servilletas",33);

  productos = [];
  productosEscogidos = [];
  productosEscogidos2 = [];

  handlerMessage = '';
  roleMessage = '';

  constructor(private alertController: AlertController) {
    this.productos.push(this.P1);
    this.productos.push(this.P2);
    this.productos.push(this.P3);
    this.productos.push(this.P4);
    this.productos.push(this.P5);
  }

  escogidos(){
    console.log(this.productosEscogidos);

    for(let x in this.productosEscogidos){
      for(let y in this.productosEscogidos){
        if(x==y){
          this.productosEscogidos2.push(y);
        }
      }
    }

  }

    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Desea Borrarlo?',
        //buttons: ['OK'],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: (data) => {
              console.log(data);
            },
          },
          {
            text: 'OK',
            role: 'confirm',
            handler: (data) => {
              console.log(data);
            },
          },
        ],
      });
  
      await alert.present();
    }
  
  


}
