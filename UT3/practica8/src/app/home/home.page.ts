import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { EditarAlumnoPage } from '../editar-alumno/editar-alumno.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private apiService: ApiServiceProvider,
    public alertController:AlertController, public modalController: ModalController) {}

    async modificarAlumno(indice: number) {
      const modal = await this.modalController.create({
        component: EditarAlumnoPage,
        componentProps: {
          'alumnoJson': JSON.stringify(this.alumnos[indice])
        }
      });
      modal.onDidDismiss().then((dataAlumnoModificado) => {
        let alumnoModificado:Alumno=dataAlumnoModificado['data'];
        if (alumnoModificado != null) {
          this.dataProvider.modificarAlumno(alumnoModificado)
            .then((alumno: Alumno) => {
              this.alumnos[indice] = alumno;  //si se ha modificado en la api se actualiza en la lista
            })
            .catch((error: string) => {
              console.log(error);
            });
        }
      });
  
      return await modal.present();
  
    }//end_modificarAlumno
  }
