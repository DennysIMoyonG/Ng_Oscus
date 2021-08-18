import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaCreditoComponent } from './rutas/ruta-credito/ruta-credito.component';

const routes: Routes = [
  {path: 'credito', component: RutaCreditoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditoRoutingModule { }
