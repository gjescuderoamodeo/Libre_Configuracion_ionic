import { Component, OnInit } from '@angular/core';
import { ApiServiceProvider } from 'src/app/providers/api-service/api-service';
import { Grupo, Alumno } from 'src/app/modelo/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public alumnos=new Array<Alumno>();
  public grupos=new Array<Grupo>();

  constructor(private apiService: ApiServiceProvider) {
  }

  ngOnInit(): void {
    this.recargarPag()
  }

  recargarPag(){
    this.apiService.getGrupos()
    .then( (grupos:Grupo[])=> {
        this.grupos=grupos;
    })
    .catch( (error:string) => {
        console.log(error);
    });


    this.apiService.getAlumnos()
    .then( (alumnos:Alumno[])=> {
        this.alumnos=alumnos;
        //console.log(this.alumnos);
    })
    .catch( (error:string) => {
        console.log(error);
    });
}

//Version 2
recargarPag2(){
  this.apiService.getGrupos()
  .then( (grupos:Grupo[])=> {
      this.grupos=grupos;
  })
  .catch( (error:string) => {
      console.log(error);
  });

  this.apiService.getAlumnos()
  .then( (alumnos:Alumno[])=> {
      this.alumnos=alumnos;
      //console.log(this.alumnos);
  })
  .catch( (error:string) => {
      console.log(error);
  });

}



}
