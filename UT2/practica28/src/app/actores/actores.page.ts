import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.page.html',
  styleUrls: ['./actores.page.scss'],
})
export class ActoresPage implements OnInit {

  actores=[{"nombre":"José","nacionalidad":"Español","Anno":"1993"},
  {"nombre":"Manuelita","nacionalidad":"Suiza","Anno":"1998"}]

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  borrar(actor:any){
    let index = this.actores.indexOf(actor, 0);
    if (index > -1) {
      this.actores.splice(index, 1);
    }
  }


    //alertas
    async presentAlert(actor:any) {
      const alert = await this.alertController.create({
        message: 'Desea Borrralo',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: (data) => {
              //console.log(data);
            },
          },
          {
            text: 'OK',
            role: 'confirm',
            handler: (data) => {
              this.borrar(actor);
            },
          },
        ],
      });
  
      await alert.present();
    }

}
