import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import {usuario} from '../modelo/usuario';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  validations_form: FormGroup;
  genders: Array<string>;
  usuario:usuario = new usuario();


  constructor( public formBuilder: FormBuilder,
    private navCtrl: NavController) {}


    ngOnInit() {

      this.genders = [
      "Male",
      "Female"
      ];
      this.validations_form = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
      Validators.maxLength(25),
      Validators.minLength(5),
      Validators.pattern('^[a-zA-Z]{1}[a-zA-Z0-9]+$'),
      Validators.required
      ])),
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+[@]{1}[a-zA-Z0-9-]+[.]{1}[a-zA-Z]+$')
      ])),
      gender: new FormControl(this.genders[0], Validators.required),
      terms: new FormControl(false, Validators.pattern('true'))
      });
      }

    /*Al pulsar el botón submit se llama a este método que recibe como parámetro todos los valores introducidos en el formulario.
Para pasar estos valores a la siguiente página se crea un objeto de la clase NavigationExtras.
Este objeto es un array asociativo donde definimos un campo queryParams, que a su vez es otro array asociativo.
Dentro de queryParams creamos una pareja clave-valor para cada parámetro que queramos pasar a la otra página
El valor asociado a 'user' es un objeto. Siempre que queramos pasar un objeto como parámetro tenemos que pasarlo a JSON.
*/
onSubmit(values){
  console.log(values);
  
  this.usuario.name=values.name;
  this.usuario.username=values.username;
  this.usuario.email=values.email;
  this.usuario.gender=values.gender;

  let navigationExtras: NavigationExtras = {
  queryParams: {
  user: JSON.stringify(this.usuario),
  usuario: this.usuario,
  numero: 3
  }
  };
  this.navCtrl.navigateForward('/user', navigationExtras);
  }
  
  
}
