import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { EditarAlumnoPage } from '../editar-alumno/editar-alumno.page';
import { Alumno } from '../modelo/Alumno';
import { ApiServiceProvider } from '../providers/api-service/api-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public alumnos = new Array<Alumno>();
  public numPagina: number = 1;
  private NUM_ELEMENTOS_PAGINA: number = 10;
  public first_name_busqueda = '';
  public last_name_busqueda = '';

  constructor(private apiService: ApiServiceProvider,
    public alertController: AlertController,
    public modalController: ModalController,
    public toastController: ToastController) {
  }

  /*
  Cuando se carga la pantalla se llama al método getAlumnos de la Api. Este es un método asíncrono que devuelve un objeto Promise del que debe ser evaluado el resultado.
  Si el acceso a la Api ha ido bien se ejecuta el código asociado a la cláusula then.  Símplemente se coge el array de alumnos que llega y se asocia a él el atributo alumnos de la clase.
  Si ha ido mal el acceso (por ejemplo si no hemos lanzado jsonServer) se coge el error que llega y se muestra por consola.
  */

  ngOnInit(): void {
    this.getAlumnosPaginado();
  }//end_ngOnInit

  /*
  Este método llama al método eliminarAlumno de la Api y le pasa el id del alumno a eliminar. Se devuelve un objeto Promise. Si el borrado ha ido bien se ejecuta el código asociado a la cláusula then. Símplemente se muestra por consola un mensaje y se elimina el alumno del array de alumnos de la clase, lo que hará que deje de verse en la vista.
  Si el borrado ha ido mal muestro por consola el error que ha ocurrido.
  */
  eliminarAlumno(indice: number) {
    this.apiService.eliminarAlumno(this.alumnos[indice].id)
      .then((correcto: Boolean) => {
        console.log("Borrado correcto del alumno con indice: " + indice);
        this.alumnos.splice(indice, 1);
      })
      .catch((error: string) => {
        console.log("Error al borrar: " + error);
      });
  }//end_eliminar_alumno

  /*
  este método comentado permite modificar los datos del alumno mediante un alertController
  */
  async modificarAlumnoConAlert(indice: number) {
    let alumno = this.alumnos[indice];
    const alert = await this.alertController.create({
      header: 'Modificar',
      inputs: [
        {
          name: 'first_name',
          type: 'text',
          value: alumno.first_name,
          placeholder: 'first_name'
        },
        {
          name: 'last_name',
          type: 'text',
          id: 'last_name',
          value: alumno.last_name,
          placeholder: 'last_name'
        },
        {
          name: 'email',
          id: 'email',
          type: 'text',
          value: alumno.email,
          placeholder: 'email'
        },
        {
          name: 'gender',
          id: 'gender',
          type: 'text',
          value: alumno.gender,
          placeholder: 'gender'
        },
        {
          name: 'avatar',
          value: alumno.avatar,
          type: 'url',
          placeholder: 'avatar'
        },
        {
          name: 'address',
          value: alumno.address,
          type: 'text',
          placeholder: 'address'
        },
        {
          name: 'city',
          value: alumno.city,
          type: 'text',
          placeholder: 'city'
        },
        {
          name: 'postalCode',
          value: alumno.postalCode,
          type: 'text',
          placeholder: 'postalCode'
        }
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
            console.log(data);
            var alumnoModificado: Alumno = new Alumno(
              alumno.id,
              data['gender'],
              data['first_name'],
              data['last_name'],
              data['email'],
              data['avatar'],
              data['address'],
              data['city'],
              data['postalCode']);
            this.apiService.modificarAlumno(alumnoModificado)
              .then((alumno: Alumno) => {
                this.alumnos[indice] = alumno;
              })
              .catch((error: string) => {
                console.log(error);
              });
            console.log('Confirm Ok');
          }
        }
      ]
    });
    await alert.present();
  }//end_modificarAlumnoConAlert

  /*
este método pasa a un activity abierto en modal el objeto alumno que se encuentra en la posición de la lista que se ha pulsado.
El activity tiene un formulario para modificar los datos.
Si los datos son válidos y se pulsa aceptar en el activity se devuelve el objeto alumno con los datos modificados.
En este caso se actualiza el objeto alumno del array con los nuevos datos.
Si se pulsa cancelar en el activity se devuelve null.
*/
  async modificarAlumno(indice: number) {
    const modal = await this.modalController.create({
      component: EditarAlumnoPage,
      componentProps: {
        'alumnoJson': JSON.stringify(this.alumnos[indice])
      }
    });

    modal.onDidDismiss().then((dataAlumnoModificado) => {
      let alumnoModificado: Alumno = dataAlumnoModificado['data'];
      if (alumnoModificado != null) {
        this.apiService.modificarAlumno(alumnoModificado)
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

  public paginaSiguiente() {
    this.numPagina++;
    this.getAlumnosPaginado();
  }

  public primeraPagina() {
    this.numPagina = 1;
    this.getAlumnosPaginado();
  }

  public paginaAnterior() {
    if (this.numPagina > 1) {
      this.numPagina--;
      this.getAlumnosPaginado();
    }
  }

  getAlumnosPaginado() {
    this.apiService.getAlumnosPaginado(this.numPagina, this.NUM_ELEMENTOS_PAGINA)
      .then((alumnos: Alumno[]) => {
        this.alumnos = alumnos;
      })
      .catch((error: string) => {
        console.log(error);
      });
  }

  async buscar() {
    const alert = await this.alertController.create({
      header: 'buscar',
      inputs: [
        {
          name: 'first_name',
          type: 'text',
          value: this.first_name_busqueda,
          placeholder: 'first_name'
        },
        {
          name: 'last_name',
          type: 'text',
          id: 'last_name',
          value: this.last_name_busqueda,
          placeholder: 'last_name'
        }
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
            this.first_name_busqueda = data['first_name'];
            this.last_name_busqueda = data['last_name'];
            if (this.first_name_busqueda == '' && this.last_name_busqueda == '') {
              this.numPagina = 1;
              this.getAlumnosPaginado();
              return;
            }
            this.apiService.buscarAlumnos(this.first_name_busqueda, this.last_name_busqueda)
              .then((alumnos: Alumno[]) => {
                this.alumnos = alumnos;
              })
              .catch((error: string) => {
                console.log(error);
              });
            console.log('Confirm Ok');
          }
        }
      ]
    });
    await alert.present();
  }//end_buscar

  /*
este método pasa a un activity abierto en modal objeto alumno recién creado.
El activity tiene un formulario para editar los datos.
Si los datos son válidos y se pulsa aceptar en el activity se devuelve el objeto alumno con los datos nuevos.
En este caso se añade el nuevo objeto alumno al array.
Si se pulsa cancelar en el activity se devuelve null.
*/

async nuevoAlumno() {

  const modal = await this.modalController.create({
    component: EditarAlumnoPage,
    componentProps: {
      'alumnoJson': JSON.stringify(new Alumno(null,
        null,null,null,null,null,null,null,null))
    }
  });

  modal.onDidDismiss().then((dataNuevoAlumno) => {
    let nuevoAlumno:Alumno=dataNuevoAlumno['data'];
    if (nuevoAlumno != null) {
      this.apiService.insertarAlumno(nuevoAlumno)
        .then((alumno: Alumno) => {
          this.alumnos.push(alumno);  //si se ha insertado en la api se añade en la lista
        })
        .catch((error: string) => {
          console.log(error);
          this.presentToast("Error al insertar: " + error);
        });
    }
  });
  return await modal.present();
} //end_nuevoAlumno

async presentToast(message:string) {
  const toast = await this.toastController.create({
    message: message,
    duration: 2000
  });
  toast.present();
}

}//end_class
