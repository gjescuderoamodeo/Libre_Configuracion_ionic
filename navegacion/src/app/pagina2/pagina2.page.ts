import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})

export class Pagina2Page{

  constructor(private navCtrl: NavController){
    
  }

  ngOnDestroy(){

  }

  goToPagina3(){
    this.navCtrl.navigateForward('/pagina3');
  }

}
