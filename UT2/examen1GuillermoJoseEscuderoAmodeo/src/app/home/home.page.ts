import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  equipos = ["SANTA CLARA", "SAFAUR", "BETIS ESPARTINAS", "SIDERAL", "FRESAS", "MAIRENA DEL ALJARAFE"];
  //partidos=["SANTA CLARA – 36 SAFAUR – 62", "SIDERAL – 50 BETIS ESPARTINAS – 46","MAIRENA DEL ALJARAFE – 66 FRESAS - 49"];
  //resultados=[36,62,50,46,66,49];
  partidos2=[ {"equipo1":"SANTA CLARA","equipo2": "SAFAUR", "resultado1": 36, "resultado2":62},
  {"equipo1":"SIDERAL","equipo2": "BETIS ESPARTINAS", "resultado1": 50, "resultado2":46},
  {"equipo1":"MAIRENA DEL ALJARAFE","equipo2": "FRESAS", "resultado1": 66, "resultado2":49}];

  nuevoP=false;
  editar=false;

  equipo1:string="";
  equipo2:string="";
  resultado1:number=0;
  resultado2:number=0;
  posicion:number=0;

  editando1=false;
  numedit1=0;
  editando2=false;
  numedit2=0;


  validations_form: FormGroup; 

  constructor(private fb: FormBuilder,private alertController: AlertController) {
        
      this.validations_form = this.fb.group({
      local: new FormControl('', Validators.compose([
        Validators.required,
        //Validators.pattern('^[a-zA-Z]')
        ])),
      visitante: new FormControl('', Validators.compose([
        Validators.required,
        //Validators.pattern('^[a-zA-Z]')
        ])),
    }/*, { validators: [this.futbolNoValido()] }*/);
  }

  //SUBMIT
  onSubmit(values:any){
    //console.log(values.local);
    
    let local=values.local;
    let visitante=values.visitante;

    if(!this.equipos.includes(local)){
      this.presentAlert2();
    }

    if(!this.equipos.includes(visitante)){
      this.presentAlert3();
    }

    if(local==visitante){
      this.presentAlert();
    }

    for(let i=0;i<this.partidos2.length;i++){
      if(this.partidos2[i].equipo1==local && this.partidos2[i].equipo2==visitante || this.partidos2[i].equipo1==visitante && this.partidos2[i].equipo2==local){
        this.presentAlert4();
      }
    }

  }

  //alertas
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Los 2 equipos son iguales',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (data) => {
            //console.log(data);
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: (data) => {
            //console.log(data);
          },
        },
      ],
    });

    await alert.present();
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Equipo local no existe',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (data) => {
            //console.log(data);
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: (data) => {
            //console.log(data);
          },
        },
      ],
    });

    await alert.present();
  }

  async presentAlert3() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Equipo visitante no existe',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (data) => {
            //console.log(data);
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: (data) => {
            //console.log(data);
          },
        },
      ],
    });

    await alert.present();
  }

  async presentAlert4() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Partido ya existe',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (data) => {
            //console.log(data);
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: (data) => {
            //console.log(data);
          },
        },
      ],
    });

    await alert.present();
  }



  //funciones para editar resultados del partido
  edit(partido:any){
    //console.log(partido)
    this.equipo1=partido.equipo1;
    this.resultado1=partido.resultado1;
    this.equipo2=partido.equipo2;
    this.resultado2=partido.resultado2
    this.posicion=this.partidos2.indexOf(partido);
    //console.log(this.partidos2.indexOf(partido))

    this.editar=true;

    
  }

  edit2(){    
    let newResultado = {"equipo1":this.equipo1,"equipo2": this.equipo2, "resultado1": this.resultado1, "resultado2":this.resultado2, "posicion":this.posicion}

    this.partidos2[this.posicion]=newResultado;


    this.editar=false;
  }

  //funciones añadir resultado
  mas1(numero:number){
    this.resultado1+=numero
  }

  mas2(numero:number){
    this.resultado2+=numero
  }

  editar1(){
    this.editando1=true;
    this.editando2=false;
  }

  editar2(){
    this.editando1=false;
    this.editando2=true;
  }

  //funciones volver a la lista
  editar1end(){
    this.editando1=false;
    this.editando2=false;

    if(this.numedit1>=0){
      this.resultado1=this.numedit1;
    }
    this.numedit1=0;
  }

  editar2end(){
    this.editando1=false;
    this.editando2=false;

    if(this.numedit2>=0){
      this.resultado2=this.numedit2;
    }
    this.numedit2=0;
  }

  futbolNoValido(): ValidatorFn {

    return (formGroup: AbstractControl): ValidationErrors | null => {
      const local= formGroup.get('local') as FormControl;
      const visitante = formGroup.get('visitante') as FormControl;
      console.log(local+ "" + visitante)
      
      if (local===visitante) {
        return {isValid: false};           
      }
      
      //en otro caso se valida
      return null;
    };
  }

}
