import { Component } from '@angular/core';
import { Reserva } from '../modelo/reserva';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  reservas:Array<Reserva> = new Array<Reserva>();

  constructor() {
    let reserva1:Reserva = new Reserva("Plaza mayor de lujo", "Madrid","España","2019-02-2000","2019-02-2000");
    let reserva2:Reserva = new Reserva("Weekendo", "Granada","España","2019-02-2000","2019-02-2000");
    let reserva3:Reserva = new Reserva("Hotel YEET Zaragoza", "Zaragoza","España","2019-02-2000","2019-02-2000");
    this.reservas.push(reserva1, reserva2, reserva3);
    console.log(reserva1)
  }

  borrar(reserva:Reserva){
    let index = this.reservas.indexOf(reserva, 0);
if (index > -1) {
   this.reservas.splice(index, 1);
}
  }

}
