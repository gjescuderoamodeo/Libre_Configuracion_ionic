import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  validations_form: FormGroup; 
  equipos= [
    {"equipo":"Alaves", "jugadores": ["Fernando Pacheco","Antonio Sivera","Aritz Castro","Tachi"," Rubén Duarte","Rodrigo Ely","Víctor Laguardia"]},
    
    {"equipo":"Atletico Madrid", "jugadores": ["Ivo Grbic","Jan Oblak","Miguel San Román","José Giménez"," Manuel Sánchez","Renan Lodi","Stefan Savic"]},
    
    {"equipo":"Cadiz", "jugadores":["Jeremías Ledesma","David Gil","Juan Flere","Sergio González"," Fali","Marcos Mauro","Carlos Akapo"]}    
    ];
  constructor(private fb: FormBuilder,
    private navCtrl: NavController) {
        
      this.validations_form = this.fb.group({
      local: new FormControl('', Validators.required),
      visitante: new FormControl('', Validators.required),
    }, { validators: [this.futbolNoValido()] });
  }
  

 

    
    futbolNoValido(): ValidatorFn {

      return (formGroup: AbstractControl): ValidationErrors | null => {
        const local= formGroup.get('local') as FormControl;
        const visitante = formGroup.get('visitante') as FormControl;
        console.log(local+ "" + visitante)
        
        if (local===visitante) {
          return { isValid: false};           
        }
        
        //en otro caso se valida
        return null;
      };
    }

    //if (local) {
    //  local.setErrors({ isValid: true });
    //  return null;
    //}
    
    //en otro caso se valida
    //return null;




}
