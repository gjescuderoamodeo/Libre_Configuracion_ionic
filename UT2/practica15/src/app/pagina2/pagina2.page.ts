import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, ViewDidEnter, ViewWillEnter, ViewWillLeave } from '@ionic/angular';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  alumnado;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {

      this.alumnado = JSON.parse(params["alumnado"]);

      console.log(this.alumnado);
  });
   }

   ionViewDidEnter(): void {
    alert(this.alumnado.nombre);
  }

  

  ngOnInit() {
  }

}
