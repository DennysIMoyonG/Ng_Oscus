import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionUsuarioComponent } from './rutas/gestion-usuario/gestion-usuario.component';

const routes: Routes = [
  {  path:'usuario', component : GestionUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
