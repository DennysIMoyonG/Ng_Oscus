import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {

  mostarPrimerComponente:boolean = true;
  usuarios = [
    {
      nombre : "Edwin Moyón",
      imagen : "https://www.leisa-al.org/web/images/stories/noticias/2017/diciembre/arbol1.jpg",
      descripcion : "Te comparto que, en cuanto tengas 50 puntos de reputación, podrás realizar comentarios. Creo que tu respuesta es correcta, pero fue detectada como una publicación de baja calidad por su poco contenido. En todo caso, te agradezco por tu aporte. Saludo."
    },
    {
      nombre : "Nelson Moyón",
      imagen : "https://img.fotocommunity.com/maigruen-9082d97b-ac4e-481e-a726-12c9faa10af8.jpg?height=400",
      descripcion : "descripcion 3"
    },
    {
      nombre : "Cristhian Moyón",
      imagen : "https://www.jardineriaon.com/wp-content/uploads/2017/07/arboles-en-alemania.jpg",
      descripcion : "descripcion 4"
    },
    {
      nombre : "Jhonatan Moyón",
      imagen : "https://image.slidesharecdn.com/arboles-131106080436-phpapp01/95/arboles-1-638.jpg?cb=1383725104",
      descripcion : "descripcion 5"
    }
  
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

}
