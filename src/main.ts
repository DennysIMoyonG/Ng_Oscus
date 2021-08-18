import { enableProdMode } from '@angular/core';
import { async } from '@angular/core/testing';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// function sinParametro(): void {
//   console.log("Sin parametros");

// }

// function soloNUmeros(a: number, b: number, c: number): number {
//   return a + b + c;
// }

// console.log("suma", soloNUmeros(1, 2, 3));

// // funsiones anominas
// const funsionAnonima = function () { };
// const funsionAnonimaNombre = function hola() { }; // sin nombre

// funsionAnonima();
// funsionAnonimaNombre();

// // funsiones anonimas  => ->
// const funsionFechaUno = () => { };
// // const funsionFechaDos = (a:number) => {return a +1};
// // const funsionFechaTres = (a:number) => a +1;
// // const funsionFechaCuatro = a => a +1;
// // const funsionFechaCinco = (a:number, b:number) => a +b;
// //  funsionFechaDos(1);
// //  funsionFechaTres(3);
// //  funsionFechaCuatro(2);
// //  funsionFechaCinco(2,4);

// function sumaNumeros(numeroIncial: number, ...otrosNumeros: number[]): number {
//   let total = 0;
//   otrosNumeros.forEach(elemento => {
//     total += elemento;
//   });
//   return numeroIncial + total;
// }

// console.log(sumaNumeros(10, 2, 3, 4, 2));
// console.log(sumaNumeros(10, 1));
// console.log(sumaNumeros(10, 22, 23));


// //// suscripcion callback

// console.log("Primero");
// setTimeout(() => {

//   console.log("cosulta bb1");
//   setTimeout(() => {
//     console.log("cosulta bb2");

//     setTimeout(() => {
//       console.log("cosulta bb3");

//       setTimeout(() => {
//         console.log("cosulta bb4");
//       }, 9);

//     }, 9);

//   }, 9);
// }, 9);
// console.log("Segundo");


// const sumeroNumeroPromesa = new Promise((resolve, reject) => {
//   resolve(4);
// });


// const sumeroNumeroPromesaError = new Promise((resolve, reject) => {
//   reject("Error Suma")
// });

// console.log("primero");

// sumeroNumeroPromesa
//   .then((datos) => {
//     console.log("todo bien", datos);
//     console.log("tercero");
//     return sumeroNumeroPromesa;
//   })
//   .then((datos) => {
//     console.log("todo bien", datos);
//     console.log("Cuarto");
//     return sumeroNumeroPromesa;
//   })
//   .then((datos) => {
//     console.log("todo bien", datos);
//     console.log("Quinto");
//     return sumeroNumeroPromesa;
//   })
//   .then((datos) => {
//     console.log("todo bien", datos);
//     console.log("Sexto");
//   }).catch(err => {
//     console.log(err);
//   });

// ///asunc aweit
// const fecha = async () => 1;
// const anonima = async function () { };

// async function ejecutarPromesas() {

//   try {

//     const resultado = await sumeroNumeroPromesa;


//   } catch (error) {
//     console.error(error);

//   }

// }

// let variosTipo: number | string | boolean = 1
// variosTipo = '1';
// variosTipo = true;
// variosTipo = 15;

// let operacion = (variosTipo as number) + 10;
// let otro = (variosTipo as any) as string;
// let otroDos = (variosTipo as any) as boolean;



// ///interfaces
// enum EstadoUsuario {
//   Activo = 'A',
//   Inactivo = 'B'
// }

// interface Usuario { //Para tipado de datos
//   nombre: string,
//   apellido: string,

//   edad?: number

//   estado: EstadoUsuario,
//   imprimirUsuario?: (mensaje: string) => string | boolean,
//   calculoImpuesto?: (inpuesto: number) => number,
//   estadoActual?: () => EstadoUsuario
// };

// const dennysJson: Usuario = {

//   nombre: 'dennys',
//   apellido: 'Moyon',
//   edad: 31,
//   estado: EstadoUsuario.Activo
// }


// if (dennysJson.edad) {
//   console.log(dennysJson.edad);

// }


// class Persona {

//   private cedula: string = '0604112649'
//   protected nombrePellido: string = '';
//   constructor(public nombre: string, public apellido: string) {
//     this.nombrePellido = nombre + " " + apellido;

//   }

//   private mostrarApellido(): string {
//     return this.nombrePellido;
//   }

//   public getNombreApellido(): string { return this.nombrePellido };
// }

// let objPersona = new Persona("Dennys", " Moyon");


// class UsuarioPrincipal extends Persona {

//   constructor(nombreP: string, apellido: string, public cedulaData: string, public estadoCivil: string) {
//     super(nombreP, apellido);

//   }
// }


// let usuario = new UsuarioPrincipal("Dennys", "Moyon", "0604112649", "Casado");

// console.log("Datos dennys", usuario);
// console.log(usuario.getNombreApellido());

// /// web component 

// //es una libreria que permite los componentes web Angular
// //SPA


// // LInt forma de ver que las reglas se cumplan en el codigo
// // npm install --save-dev  eslint
// // npm install --save-dev @typescript-eslint/eslint-plugin
// // npm install --save-dev @typescript-eslint/parser

// // compilar el angular 

// // npm run build --compilar para desarrollo
// // npm run builf --prod  para producción  ng  build --prod

// // node-modules  --> dependencias
// // /srv -> fuentes
//       // app/ -> archivos de desarrollo
//           // modulo principal
//           // componente principal 
//           // modulo rutas 
//       // /assets -> archios estaticos 
//       // /enviroments -> variables desarrollo y produccion
//       // main.ts -> configuraciones
//       // polyfills.ts -> funsiones que no estan tipadas,
//       // styless.scss -> estilos globales
//       // test.ts -> pruebas
// // Angular.json -> configuracion del angular
// // karma.conf.js -> test
// // packages.json -> archivo de configuración del proyecto
// // tsConfig -> configuracion para typeScript