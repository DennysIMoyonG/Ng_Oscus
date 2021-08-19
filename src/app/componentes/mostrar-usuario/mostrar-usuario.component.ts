import { Component, Input, OnDestroy, OnInit } from '@angular/core';

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

  @Input() 
  usuario = {
    nombre : "Dennys Moyón",
    imagen : "https://www.adslzone.net/app/uploads-adslzone.net/2021/01/whatsapp-cambiar-perfil.jpg",
    descripcion : "WhatsApp sigue a la cabeza de las aplicaciones de mensajería instantánea con más de 1.600 millones de usuarios activos mensuales en todo el mundo. La herramienta, propiedad de Facebook, nos permite editar nuestro perfil añadiendo una foto, un nombre e información sobre nosotros."
  }

  

  constructor() { }
  ngOnDestroy(): void {
    // limpiar variables, observables
    console.log("limpiar MostrarUsuarioComponent")
  }

  ngOnInit(): void {
    console.log("Iniciar MostrarUsuarioComponent")
  }

  cambiarImagen(evento:any, usuario:any){
    console.log("evento", evento);
    console.log("usuario", usuario);
    
    let auxiliar = "https://as.com/meristation/imagenes/2021/02/15/noticias/1613386928_932921_1613391944_noticia_normal.jpg";
    if(this.usuario.imagen == auxiliar){
      this.usuario.imagen = "https://www.adslzone.net/app/uploads-adslzone.net/2021/01/whatsapp-cambiar-perfil.jpg";
    }else{
      this.usuario.imagen = auxiliar;
    }
  }
}
