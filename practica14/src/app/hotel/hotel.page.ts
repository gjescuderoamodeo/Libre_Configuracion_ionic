import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { hotel } from '../clases/hotel';
import { valoracion } from '../clases/valoraciones';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.page.html',
  styleUrls: ['./hotel.page.scss'],
})
export class HotelPage implements OnInit {

  private hoteles:hotel[];

  constructor(private activatedRoute: ActivatedRoute) { 

    this.activatedRoute.queryParams.subscribe(params => {

      let ciudad = JSON.parse(params["ciudad"]);
      //this.hoteles=ciudad.hoteles;

      console.log(ciudad);
  });

  }

  ngOnInit() {

  }

  valoracionClick(valoracion:valoracion){
    let navigationExtras: NavigationExtras= {  
      queryParams: {
        ciudad: JSON.stringify(valoracion)
      }
    };
  }

}
