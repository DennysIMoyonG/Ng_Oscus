import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


/// Modulos del proyecto 
import { FinanzasModule } from './modulo-finanzas/finanzas/finanzas.module';
import { CreditoModule } from './modulo-credito/credito/credito.module';

/// Modulo del Sistema
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaNoEncontradaComponent } from './rutas/ruta-no-encontrada/ruta-no-encontrada.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { MostrarUsuarioComponent } from './componentes/mostrar-usuario/mostrar-usuario.component';
import { TodosRestModule } from './Servicios/rest/todos-rest/todos-rest.module';


@NgModule({ //decorador 
  declarations: [ // declaramos los componentes 
    AppComponent,
    RutaNoEncontradaComponent,
    RutaLoginComponent,
    MostrarUsuarioComponent    
  ],
  imports: [ // declaramos los modulos importados
    BrowserModule,
    AppRoutingModule,
    FinanzasModule,
    CreditoModule,
    TodosRestModule
  ],
  providers: [], // servicios declarados y crados 
  bootstrap: [AppComponent]
})
export class AppModule { }
