import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ValidatorFn,FormGroup, Validators } from '@angular/forms';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import {alumno} from '../modelo/alumno';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  validations_form: FormGroup;
  sexos: Array<string>;
  alumno:alumno = new alumno();

  constructor( public formBuilder: FormBuilder,
    private navCtrl: NavController) {
      this.validations_form = this.formBuilder.group({
        nombre: new FormControl('', Validators.required),
        apellidos: new FormControl('', Validators.required),
        edad: new FormControl('', Validators.required),
        sexo: new FormControl('', Validators.required),
        dni: new FormControl('', Validators.required),
        apellidosPadre: new FormControl('', Validators.required)
      }, { validators: [this.formularioNoValido()] });

    }

  ngOnInit() {
    this.sexos = [
      "Hombre",
      "Mujer"
    ];
    }

    

    formularioNoValido(): ValidatorFn {
      return (formGroup: FormGroup) => {
        const nombre: string = formGroup.get('nombre').value;
        const apellidos: string = formGroup.get('apellidos').value;
  
        if (false) return { isValid: false };
        //en pruebas. Siempre devuelve true
        return null;
      };
    }

  onSubmit(values: any){
    console.log(values);
    this.navCtrl.navigateForward('/user');
  }  

  getIntEdad(){
    return(Number(this.validations_form.get('edad').value));
  }

}
