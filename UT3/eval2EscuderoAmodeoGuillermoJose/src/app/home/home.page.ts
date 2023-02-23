import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Usuario } from '../modelo/Interfaces';
import { ApiServiceProvider } from '../providers/api-service/api-service';

import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private apiService: ApiServiceProvider,
    public alertController: AlertController,
    public modalController: ModalController,
    public toastController: ToastController,
    private navCtrl: NavController) { }

    async errorEncontrar() {
      const alert = await this.alertController.create({
        header: 'Error',
        message:"No existe usuario con ese id",
        buttons: [
          {
            text: 'Ok',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
            }
          }

        ]
      });
      await alert.present();
    }

  async buscarUsuario() {
    const alert = await this.alertController.create({
      header: 'Buscar Usuario',
      inputs: [
        {
          name: 'id',
          type: 'number',
          placeholder: 'id del usuario'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            //console.log(data);
            this.apiService.getUsuario(data['id'])
              .then((datos: Usuario[]) => {
                console.log(datos[0])                
                //si no hay ninguno, salta un alert de error
                if (datos[0] == undefined) {
                  this.errorEncontrar()
                  return;
                }
                //envio los datos a pagina usuarios
                let navigationExtras: NavigationExtras = {
                  queryParams: {
                  user: datos[0],
                  }
                  };
                  this.navCtrl.navigateForward('/usuarios', navigationExtras);
              })
              .catch((error: string) => {
                console.log(error);
              });
          }
        }
      ]
    });
    await alert.present();
  }//end_modificarAlumnoConAlert


  usuariosPrestamos(){
    this.navCtrl.navigateForward('/usuarios-prestamos');
  }

}
