import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navigate : any;
  constructor(private platform    : Platform,
              private splashScreen: SplashScreen,
              private statusBar   : StatusBar,private alertController: AlertController) 
  {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  //alertas
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Practica 28',
      message: 'Esta es le práctica 28 de Guillermo José Escudero Amodeo',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          role: 'confirm',
        },
      ],
    });

    await alert.present();
  }

  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Home",
        url   : "/home",
        icon  : "home"
      },
      {
        title : "Peliculas",
        url   : "/peliculas",
        icon  : "chatboxes"
      },
      {
        title : "Actores",
        url   : "/actores",
        icon  : "contacts"
      },
    ]
  }
}

