import { Component, OnInit } from '@angular/core';
import { ApiServiceProvider } from 'src/app/providers/api-service/api-service';
import { Factura } from '../modelo/Interfaces';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public facturas=new Array<Factura>();

  constructor(private apiService: ApiServiceProvider,private navCtrl: NavController) {}

  ngOnInit(): void {
    this.recargarPag()
  }

  recargarPag(){
    this.apiService.getFacturas()
    .then( (facturas:Factura[])=> {
        this.facturas=facturas;
    })
    .catch( (error:string) => {
        console.log(error);
    });
  }  

  // acceso a otro activity para añadir una nueva factura.
  addFacturaPage() {    
    this.navCtrl.navigateForward('/add-factura');
  }//end_onSubmit



}
