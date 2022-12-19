import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {

  peliculas=[{"nombre":"Lo que el viento se llevó","Director":"Pepe","Anno":"1993"},
  {"nombre":"Manuelita","Director":"Manuela","Anno":"1998"}]

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  borrar(pelicula:any){
    let index = this.peliculas.indexOf(pelicula, 0);
    if (index > -1) {
      this.peliculas.splice(index, 1);
    }
  }

  //alertas
  async presentAlert(pelicula:any) {
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
            this.borrar(pelicula);
          },
        },
      ],
    });

    await alert.present();
  }

}
