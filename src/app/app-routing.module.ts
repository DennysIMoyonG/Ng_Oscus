import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaNoEncontradaComponent } from './rutas/ruta-no-encontrada/ruta-no-encontrada.component';
import { LogeadoService } from './guards/logeado.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: RutaLoginComponent
  },
  {
    canActivate: [ //GUARDS
      LogeadoService
    ],
    path: 'modulo-finanzas',
    loadChildren : ()=> import('./modulo-finanzas/finanzas/finanzas.module').then(m => m.FinanzasModule)
  },
  {
    path: 'modulo-credito',
    loadChildren : ()=> import('./modulo-credito/credito/credito.module').then(m => m.CreditoModule)
  },
  {
    path: 'no-encontrado',
    component: RutaNoEncontradaComponent
  },
  {
    path: '**',
    redirectTo: '/no-encontrado'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
