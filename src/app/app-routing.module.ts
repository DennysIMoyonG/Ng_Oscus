import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaNoEncontradaComponent } from './rutas/ruta-no-encontrada/ruta-no-encontrada.component';
import { LogeadoService } from './guards/logeado.service';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';

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
    path: 'usuario/:id',
    component: RutaUsuarioComponent
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
     path: 'modulo-usuario',
     loadChildren : ()=> import('./modulo-usuarios/usuario.module').then(m => m.UsuarioModule)
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
