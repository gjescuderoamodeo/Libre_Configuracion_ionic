import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators, ReactiveFormsModule } from '@angular/forms';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  furbo: FormGroup; 
  validations_form: FormGroup; 

  constructor(
    public formBuilder: FormBuilder,
    private navCtrl: NavController
  ) { }
  

  equipos = [
    {"equipo":"Alaves", "jugadores": ["Fernando Pacheco","Antonio Sivera","Aritz Castro","Tachi"," Rubén Duarte","Rodrigo Ely","Víctor Laguardia"]},
    
    {"equipo":"Atletico Madrid", "jugadores": ["Ivo Grbic","Jan Oblak","Miguel San Román","José Giménez"," Manuel Sánchez","Renan Lodi","Stefan Savic"]},
    
    {"equipo":"Cadiz", "jugadores":["Jeremías Ledesma","David Gil","Juan Flere","Sergio González"," Fali","Marcos Mauro","Carlos Akapo"]}    
    ]

  

  ngOnInit() {

    this.furbo = new FormGroup({
      local: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });

    this.validations_form = this.formBuilder.group({
      furbo: this.furbo,
    });
    
  }



}
