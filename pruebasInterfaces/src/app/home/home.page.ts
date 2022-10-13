import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  casado=true;
  estadoCivil:string="casado";

  //frutas:string;
  fruta:any=["platano","banana","pera"];
  frutaElegida:any=new Array();



  constructor() {}

  cambiaSelect(event:any){
    console.log(this.frutaElegida)
    console.log(event.value)
  }

}
