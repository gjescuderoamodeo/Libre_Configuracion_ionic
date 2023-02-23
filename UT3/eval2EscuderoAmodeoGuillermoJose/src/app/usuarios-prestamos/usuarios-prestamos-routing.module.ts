import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosPrestamosPage } from './usuarios-prestamos.page';

const routes: Routes = [
  {
    path: '',
    component: UsuariosPrestamosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosPrestamosPageRoutingModule {}
