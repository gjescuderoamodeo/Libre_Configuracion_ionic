import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  desplegar=false;
  desplegar2=false;
  texto="";
  texto2="";
  texto3="";
  isDisabled=false;
  isDisabled2=false;
  isDisabled3=false;

  constructor() {
  }

  accion(){
    if(this.texto!=""){
      this.desplegar=true;
      this.isDisabled=true;
    }
    if(this.texto2!=""){
      this.desplegar2=true;
      this.isDisabled2=true;
    }
    if(this.texto3!=""){
      this.isDisabled3=true;
    }
  }

}
