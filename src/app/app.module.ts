import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaNoEncontradaComponent } from './rutas/ruta-no-encontrada/ruta-no-encontrada.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaNoEncontradaComponent,
    RutaLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
