import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuariosPrestamosPageRoutingModule } from './usuarios-prestamos-routing.module';

import { UsuariosPrestamosPage } from './usuarios-prestamos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuariosPrestamosPageRoutingModule
  ],
  declarations: [UsuariosPrestamosPage]
})
export class UsuariosPrestamosPageModule {}
