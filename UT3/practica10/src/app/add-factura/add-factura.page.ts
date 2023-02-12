import { Component, OnInit } from '@angular/core';
import { ApiServiceProvider } from 'src/app/providers/api-service/api-service';
import { Cliente, Factura } from '../modelo/Interfaces';

@Component({
  selector: 'app-add-factura',
  templateUrl: './add-factura.page.html',
  styleUrls: ['./add-factura.page.scss'],
})
export class AddFacturaPage implements OnInit {

  public clientes=new Array<Cliente>();

  constructor(private apiService: ApiServiceProvider) { 

  }

  ngOnInit(): void {
    this.recargarPag()
  }

  recargarPag(){
    this.apiService.getClientes()
    .then( (clientes:Cliente[])=> {
        this.clientes=clientes;
    })
    .catch( (error:string) => {
        console.log(error);
    });
  }

}
