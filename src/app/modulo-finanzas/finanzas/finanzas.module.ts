import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanzasRoutingModule } from './finanzas-routing.module';
import { RutaFinanzasComponent } from './rutas/ruta-finanzas/ruta-finanzas.component';


@NgModule({
  declarations: [
    RutaFinanzasComponent
  ],
  imports: [
    CommonModule,
    FinanzasRoutingModule
  ]
})
export class FinanzasModule { }
