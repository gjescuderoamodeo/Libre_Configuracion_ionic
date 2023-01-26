import { Component, OnInit } from '@angular/core';
import { EstadoCielo, InterfaceMunicipio, InterfacePrevisionDiariaMunicipio } from '../modelo/Interfaces';
import { ApiServiceProvider } from '../providers/api-service/api-service';
import { NavController} from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

//usar libreria moment

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.page.html',
  styleUrls: ['./municipios.page.scss'],
})
export class MunicipiosPage implements OnInit {

  public municipios:InterfaceMunicipio[]=new Array();
  public municipio:string;
  public municipiosF:InterfaceMunicipio[]=new Array();


  constructor(private apiService: ApiServiceProvider, private navCtrl: NavController) { }

  ngOnInit(): void {
    this.apiService.getMunicipios()
    .then((data:InterfaceMunicipio[])=>{
      this.municipios=data;
    })
    .catch((error:string)=>{
      console.log(error);
    });
  }//end_ngOnInit

  //función buscar municipios
  buscarMunicipio(){
    let municipio = this.municipio
    let filteredArray = this.municipios.filter(function(item) {
      return item.municipio.startsWith(municipio);
    });    
    this.municipiosF=filteredArray;
    console.log(filteredArray);
  }

  //ir a ese municipio
  goToPagina2(municipio:InterfaceMunicipio){
    let navigationExtras: NavigationExtras= {  
      queryParams: {
        municipio: JSON.stringify(municipio)
      }
    };
    this.navCtrl.navigateForward('/home', navigationExtras);
  }

}
