import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  handlerMessage = '';
  roleMessage = '';

  casado=true;
  estadoCivil:string="casado";

  //frutas:string;
  fruta:any=["platano","banana","pera"];
  frutaElegida:any=new Array();



  constructor(private alertController: AlertController) {}

  /*async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }*/


  //con 2 botones cancelar y aceptar
  /*async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }*/


  //con un formulario en el alert
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Please enter your info',
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
            console.log(data.nombre);
          },
        },
      ],
      inputs: [
        {
          name:"nombre",
          placeholder: 'Name',
        },
        {
          name:"nick",
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          name:"edad",
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          name:"comentario",
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
    });

    await alert.present();
  }

  cambiaSelect(event:any){
    console.log(this.frutaElegida)
    console.log(event.value)
  }

}
