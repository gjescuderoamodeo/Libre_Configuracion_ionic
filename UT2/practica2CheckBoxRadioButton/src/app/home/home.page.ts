import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  estadoCivil:string=null;
  desactivado=true;
  nombre:string="";
  apellidos:string="";
  provincia:string="";

  constructor() {}

}
