import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { GestionUsuarioComponent } from './rutas/gestion-usuario/gestion-usuario.component';
import { FormularioUserComponent } from '../componentes/formulario-user/formulario-user.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GestionUsuarioComponent,
    FormularioUserComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsuarioModule { }
