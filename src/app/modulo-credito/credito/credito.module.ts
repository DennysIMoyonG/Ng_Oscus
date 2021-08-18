import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutaCreditoComponent } from './rutas/ruta-credito/ruta-credito.component';
import { CreditoRoutingModule } from './credito-routing.modulo';



@NgModule({
  declarations: [
    RutaCreditoComponent
  ],
  imports: [
    CommonModule,
    CreditoRoutingModule
  ]
})
export class CreditoModule { }
