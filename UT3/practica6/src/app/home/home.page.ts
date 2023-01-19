import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiServiceProvider } from 'src/app/providers/api-service/api-service';
import { Alumno } from '../modelo/Alumno';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private apiService: ApiServiceProvider,
    public alertController:AlertController) {}

    ngOnInit(): void {
      this.recargarPag();
      //this.recargarPag2();
    }

  recargarPag(){
    this.apiService.getTiempo()
    .then( (datos:any)=> {
        console.log(datos);
        //
        this.apiService.getTiempo2(datos)
        .then((datos2:any)=> {
          console.log(datos2);
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
