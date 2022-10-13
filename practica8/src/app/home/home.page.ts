import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  asignaturas = ["Matemáticas","Lengua","Ciencias","Historia"];
  alumnos = ["Pepe gutierrez","Juan de la rosa","Miracle Jackson","José José","Felipe II"];
  alumnos_asignaturas = [];

  alu_elegidos:[];

  a_elegida = "";


  constructor() {}

  cambiaSelect(event:any){
    console.log(this.alu_elegidos)
  }

}
