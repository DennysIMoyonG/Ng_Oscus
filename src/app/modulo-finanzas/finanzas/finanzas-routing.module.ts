import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaFinanzasComponent } from './rutas/ruta-finanzas/ruta-finanzas.component';

const routes: Routes = [

  {path:'finanzas', component: RutaFinanzasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanzasRoutingModule { }
