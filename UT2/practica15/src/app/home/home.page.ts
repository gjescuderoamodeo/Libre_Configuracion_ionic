import { Component } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController, ViewDidEnter, ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import {alumno} from '../clases/alumno';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  alumnado:alumno = new alumno();

  constructor(private navCtrl: NavController) {}




  Pagina2(){

    let navigationExtras: NavigationExtras= {  
      queryParams: {
        alumnado: JSON.stringify(this.alumnado)
      }
    };
    this.navCtrl.navigateForward('/pagina2', navigationExtras);
  }

}
