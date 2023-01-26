import { Component, OnInit } from '@angular/core';
import { EstadoCielo, InterfacePrevisionDiariaMunicipio, InterfaceMunicipio } from '../modelo/Interfaces';
import { ApiServiceProvider } from '../providers/api-service/api-service';
import { ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public estadosCielo: Array<EstadoCielo>=new Array();
  //public municipio:string='41091';
  public municipio:InterfaceMunicipio;

  constructor(private apiService: ApiServiceProvider, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(params => {

      let municipio = JSON.parse(params["municipio"]);
      this.municipio=municipio;
      console.log(municipio);
  });
  }

  ngOnInit(): void {  
    this.apiService.getPrevisionDiariaMunicipio(this.municipio.codProvincia+this.municipio.codMunicipio)
      .then((data: InterfacePrevisionDiariaMunicipio[]) => {
        //previsión para hoy
        this.estadosCielo.push(data[0].prediccion.dia[0].estadoCielo[3]); //intervalo de las 0 a las 6
        this.estadosCielo.push(data[0].prediccion.dia[0].estadoCielo[4]); //intervalo de las 6 a las 12
        this.estadosCielo.push(data[0].prediccion.dia[0].estadoCielo[5]); //intervalo de las 12 a las 18
        this.estadosCielo.push(data[0].prediccion.dia[0].estadoCielo[6]); //intervalo de las 18 a las 24
        //previsión para mañana
        this.estadosCielo.push(data[0].prediccion.dia[1].estadoCielo[3]); //intervalo de las 0 a las 6
        this.estadosCielo.push(data[0].prediccion.dia[1].estadoCielo[4]); //intervalo de las 6 a las 12
        this.estadosCielo.push(data[0].prediccion.dia[1].estadoCielo[5]); //intervalo de las 12 a las 18
        this.estadosCielo.push(data[0].prediccion.dia[1].estadoCielo[6]); //intervalo de las 18 a las 24
        console.log(this.estadosCielo);
      })
      .catch((error: string) => {
        console.log(error);
      });

      //
      //this.apiService.getMunicipios();
  }

  
  }
