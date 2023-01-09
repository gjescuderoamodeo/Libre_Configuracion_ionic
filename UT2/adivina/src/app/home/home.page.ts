import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  num:number;
  mayorMenor = '...';
  numSecret: number = this.numAleatorio(0,100);

  //función devuelve un numero aleatorio entre el min y máx dado
  numAleatorio(a,b)
  {
    return Math.round(Math.random() * (b - a) + parseInt(a, 10));
  }

  //función que comprueba el numero dado
  compruebaNumero(){
    if(this.num)
    {
      if(this.numSecret < this.num)
      {
        this.mayorMenor = 'menor que';
      }
      else if(this.numSecret > this.num)
      {
        this.mayorMenor = 'mayor que';
      }
      else{
        this.mayorMenor = '';
      }
    }
  }

  //función para reiniciar el juego
  reinicia(){
    // reiniciamos las variables
    this.num = null;
    this.mayorMenor = '...';
    this.numSecret = this.numAleatorio(0,100);
  }

  constructor() {
    console.log("El número secreto es: " + this.numSecret)
  }

}
