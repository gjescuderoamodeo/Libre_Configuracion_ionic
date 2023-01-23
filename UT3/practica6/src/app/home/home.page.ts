import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiServiceProvider } from 'src/app/providers/api-service/api-service';
import { Alumno } from '../modelo/Alumno';
import { EstadoCielo, InterfacePrevisionMunicipioDiaria } from '../modelo/InterfacePrevisionMunicipioDiaria';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public estadosCielos:Array<EstadoCielo>=new Array;

  tiempo: Array<string> | undefined;

  constructor(private apiService: ApiServiceProvider,
    public alertController:AlertController) {}

    ngOnInit(): void {
      this.recargarPag();
      //this.recargarPag2();
    }

  recargarPag()/*: Promise<InterfacePrevisionMunicipioDiaria>*/{
    this.apiService.getTiempo()
    .then( (datos:any)=> {
        //console.log(datos);
        //
        this.apiService.getTiempo2(datos)
        .then((datos2:any)=> {
          //previsión para hoy
          this.estadosCielos?.push(datos2[0].prediccion.dia[0].estadoCielo[3]);//intervalo de las 0 a las 6
          this.estadosCielos?.push(datos2[0].prediccion.dia[0].estadoCielo[4]);//intervalo de las 6 a las 12
          this.estadosCielos?.push(datos2[0].prediccion.dia[0].estadoCielo[5]);//intervalo de las 12 a las 18
          this.estadosCielos?.push(datos2[0].prediccion.dia[0].estadoCielo[6]);//intervalo de las 18 a las 24

          //previsión para mañana
          this.estadosCielos?.push(datos2[0].prediccion.dia[1].estadoCielo[3]);//intervalo de las 0 a las 6
          this.estadosCielos?.push(datos2[0].prediccion.dia[1].estadoCielo[4]);//intervalo de las 6 a las 12
          this.estadosCielos?.push(datos2[0].prediccion.dia[1].estadoCielo[5]);//intervalo de las 12 a las 18
          this.estadosCielos?.push(datos2[0].prediccion.dia[1].estadoCielo[6]);//intervalo de las 18 a las 24

          //console.log(datos2[0].prediccion.dia[0].estadoCielo[3]);
          //console.log(datos2[0].prediccion.dia[1].estadoCielo);
          //console.log(this.estadosCielo)
          this.tiempo?.push(datos2[0])
      }).catch( (error:string) => {
        console.log(error);
      });
      //
    })
    .catch( (error:string) => {
        console.log(error);
    });
}

}
