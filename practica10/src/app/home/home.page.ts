import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valorAlert='';
  valorAlert2='';
  valorAlert3='';

  constructor(private alertController: AlertController) {
    this.presentAlert();    
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Escoja una opción',
      inputs:[{
        type:'radio',
        name:'ESO',
        value:'ESO',
        label:'ESO',
        
      },
      {
        type:'radio',
        name:'CICLO',
        label:'CICLO'
      }        
      ],
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
            this.valorAlert=data;
            if(this.valorAlert=="ESO"){
              this.presentAlert2();
            }
            //console.log(data);
          },
        },
      ],
    });

    await alert.present();
  }

  //valor ESO
  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Escoja una opción',
      inputs:[{
        type:'radio',
        name:'1',
        value:'1ºeso',
        label:'1ºESO',
        
      },
      {
        type:'radio',
        value:'2ºeso',
        name:'2',
        label:'2ºESO'
      },
      {
        type:'radio',
        value:'3ºeso',
        name:'3',
        label:'3ºESO'
      },
      {
        type:'radio',
        value:'4ºeso',
        name:'4',
        label:'4ºESO'
      }          
      ],
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
            this.valorAlert2=data;
            if(this.valorAlert2!=""){
              this.presentAlert3();
            }
            //console.log(data);
          },
        },
      ],
    });

    await alert.present();
  }

  //repite
  async presentAlert3() {
    const alert = await this.alertController.create({
      header: 'indique si repite o no',
      inputs:[{
        type:'checkbox',
        name:'1',
        value:'repite',
        label:'REPITE',
        
      },
      {
        type:'checkbox',
        value:'no repite',
        name:'no repite',
        label:'NO REPITE'
      }       
      ],
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
            this.valorAlert3=data;
            console.log(this.valorAlert + " " + this.valorAlert2 + " " + this.valorAlert3);
          },
        },
      ],
    });

    await alert.present();
  }

}
