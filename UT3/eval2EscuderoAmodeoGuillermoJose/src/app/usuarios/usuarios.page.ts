import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario, Libro } from '../modelo/Interfaces';
import { AlertController, ModalController, ToastController } from '@ionic/angular';

import { ApiServiceProvider } from '../providers/api-service/api-service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {


  public usuario: any;
  public libros:any;

  constructor(private activatedRoute: ActivatedRoute,
    private apiService: ApiServiceProvider,public alertController: AlertController) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.usuario = params["user"];
      //console.log(this.usuario);

      //saco los libros de ese usuario
      this.apiService.getLibrobyUsuario(this.usuario.id)
              .then((datos: Libro[]) => {
                console.log(datos[0])
                this.libros=datos;
                if (datos[0] == undefined) {
                }
              })


    });

  } 

  async devolver(libro:Libro){
    const alert = await this.alertController.create({
      header: '¿Devolver el libro?',
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
          handler: () => {
            //no puedo ponerlo a nulo, así que lo pongo a indefnido que viene a ser lo mismo
            libro.idUsuarioPrestamo=undefined;
            libro.fechaPrestamo="";
            libro.diasPrestamo=undefined
            //modifico el libro
            this.apiService.devolverLibro(libro)
            //luego recargo los datos de los libros del usuario
            .then(() => {
              this.apiService.getLibrobyUsuario(this.usuario.id)
              .then((datos: Libro[]) => {
                console.log(datos[0])
                this.libros=datos;
                if (datos[0] == undefined) {
                }
              })
            })
            .catch((error: string) => {
              console.log(error);
            });
          }
        }
      ]
    });
    await alert.present();
  }

  ngOnInit(){

  }
}

