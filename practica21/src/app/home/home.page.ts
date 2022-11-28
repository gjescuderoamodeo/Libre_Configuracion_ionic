import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
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
  //usuario:usuario = new usuario();
  //dni_correcto: FormGroup;

  validation_messages = {
    'dni': [
    { type: 'required', message: 'dni is required.' },
    { type: 'minlength', message: 'dni must be at least 9 characters long.' },
    { type: 'maxlength', message: 'dni cannot be more than 9 characters long.' },
    { type: 'pattern', message: 'Your dni must contain only 9 numbers and 1 letter.' },
    ],
    };


  constructor( public formBuilder: FormBuilder,
    private navCtrl: NavController) {
      this.validations_form = this.formBuilder.group({
        dni: new FormControl('', Validators.compose([
          Validators.maxLength(9),
          Validators.pattern('(^\s$)|^[0-9]{8}[A-Z]{1}$'),
          Validators.required,
          this.confirmDni
          ])),       
      });




      /*this.dni_correcto = new FormGroup({
        dni: new FormControl('', Validators.compose([
          Validators.maxLength(9),
          Validators.minLength(9),
          Validators.pattern('(^\s$)|^[0-9]{8}[A-Z]{1}$'),
          Validators.required
        ]))
        }, (formGroup: FormGroup) => {
        return this.confirmDni(formGroup);
        });*/
    }   

    /*formularioNoValido(): ValidatorFn {

      return (formGroup: FormGroup) => {
        const dni: string = formGroup.get('dni').value;
        //en otro caso se valida
        return null;
      };
    }*/

    ngOnInit() {      
      /*this.validations_form = this.formBuilder.group({
        dni: this.confirmDni,   
      iban: new FormControl('', Validators.required)
      });*/
      }


    confirmDni(fg: FormGroup){
    var dni=fg.controls['dni'].value  
    var numero, lete, letra;
    var expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;

    dni = dni.toUpperCase();

    if(expresion_regular_dni.test(dni) === true){
        numero = dni.substr(0,dni.length-1);
        numero = numero.replace('X', 0);
        numero = numero.replace('Y', 1);
        numero = numero.replace('Z', 2);
        lete = dni.substr(dni.length-1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero+1);
        if (letra != lete) {
            //alert('Dni erroneo, la letra del NIF no se corresponde');
            return null;
        }else{
            //alert('Dni correcto');
            return ({confirmDni:true});
        }
    }else{
        //alert('Dni erroneo, formato no válido');
        return null;
    }
      }


    
   
onSubmit(/*values*/){
  //console.log(values);
  
  //this.usuario.dni=values.dni;
  //this.usuario.iban=values.username;

  let navigationExtras: NavigationExtras = {
  queryParams: {
  //user: JSON.stringify(this.usuario),
  //usuario: this.usuario,
  numero: 3
  }
  };
  this.navCtrl.navigateForward('/user', navigationExtras);
  }
  
  
}
