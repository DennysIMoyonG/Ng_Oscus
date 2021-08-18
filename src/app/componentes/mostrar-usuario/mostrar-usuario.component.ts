import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-usuario',
  templateUrl: './mostrar-usuario.component.html',
  styleUrls: ['./mostrar-usuario.component.scss']
})
export class MostrarUsuarioComponent implements OnInit, OnDestroy {

  nombre:string = 'Dennys';
  numero:number = 31;
  estadoCivil:boolean = true;
  objeto:any = {nombre:'dennys'};
  arreglo = [2,3,4,2];

  constructor() { }
  ngOnDestroy(): void {
    // limpiar variables, observables
    console.log("limpiar MostrarUsuarioComponent")
  }

  ngOnInit(): void {
    console.log("Iniciar MostrarUsuarioComponent")
  }

}
