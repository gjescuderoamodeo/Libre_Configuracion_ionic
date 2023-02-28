import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Libro, Usuario } from '../modelo/Interfaces';
import { ApiServiceProvider } from '../providers/api-service/api-service';

import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-usuarios-prestamos',
  templateUrl: './usuarios-prestamos.page.html',
  styleUrls: ['./usuarios-prestamos.page.scss'],
})
export class UsuariosPrestamosPage implements OnInit {

  public usuarios = new Array<Usuario>();
  public libros: any;

  constructor(private apiService: ApiServiceProvider,
    public alertController: AlertController,
    public modalController: ModalController,
    public toastController: ToastController,
    private navCtrl: NavController) {


  }

  ngOnInit() {
    this.obtenerUsuariosConPrestamo();
  }

  async obtenerUsuariosConPrestamo() {
    try {
      this.usuarios = await this.apiService.obtenerUsuariosConPrestamo();
    } catch (error) {
      console.error(error);
      // mostrar mensaje de error al usuario
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'No se pudo obtener los usuarios con préstamo',
        buttons: ['OK']
      });
      await alert.present();
    }
  }


  volver() {
    this.navCtrl.navigateBack('/');
  }

}
