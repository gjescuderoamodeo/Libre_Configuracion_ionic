import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import {alumno} from '../modelo/alumno';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  validations_form: FormGroup | undefined;
  alumno:alumno = new alumno();

  constructor( public formBuilder: FormBuilder,
    private navCtrl: NavController) {}

  ngOnInit() {
    this.validations_form = this.formBuilder.group({    
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.compose([
    Validators.required,
    Validators.pattern('^[a-zA-Z0-9_.+-]+[@]{1}[a-zA-Z0-9-]+[.]{1}[a-zA-Z]+$')
    ]))
    });
    }

  onSubmit(values: any){
    console.log(values);
    this.navCtrl.navigateForward('/user');
  }  

}
