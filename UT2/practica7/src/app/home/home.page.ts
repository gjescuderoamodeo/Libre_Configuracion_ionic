import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  estudios:string=null;
  estudiosEso:string=null;
  estudiosCiclo:string=null;
  eso:boolean=false;
  ciclo:boolean=false;
  desactivado:boolean=true;


  cursoEso="";
  repite:boolean=false; 

  accion(){
    if(this.estudios=="eso"){
      this.ciclo=true;
    }

    if(this.estudios=="ciclo"){
      this.eso=true;
    }
  }

  accion2(){    
    if(this.estudiosEso!=""){
      this.desactivado=false;
    }
  }

  boton1(){
    console.log(this.estudios + "-" + this.estudiosEso + "-" + this.repite)
  }

  accion3(){    
    if(this.estudiosCiclo!=""){
      this.desactivado=false;
    }
  }

  boton2(){
    console.log(this.estudios + "-" + this.estudiosEso + "-" + this.repite)
  }
  


  constructor() {

  }





}
