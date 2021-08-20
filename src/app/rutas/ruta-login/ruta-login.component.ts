import { Component, OnInit } from '@angular/core';
import { TodoInterface } from 'src/app/Servicios/rest/interfaces/todos.interface';
import { TodosRestService } from '../../Servicios/rest/todos-rest/todos-rest.service';

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {

  mostarPrimerComponente: boolean = true;
  usuarios = [
    {
      nombre: "Edwin Moyón",
      imagen: "https://www.leisa-al.org/web/images/stories/noticias/2017/diciembre/arbol1.jpg",
      descripcion: "Te comparto que, en cuanto tengas 50 puntos de reputación, podrás realizar comentarios. Creo que tu respuesta es correcta, pero fue detectada como una publicación de baja calidad por su poco contenido. En todo caso, te agradezco por tu aporte. Saludo."
    },
    {
      nombre: "Nelson Moyón",
      imagen: "https://img.fotocommunity.com/maigruen-9082d97b-ac4e-481e-a726-12c9faa10af8.jpg?height=400",
      descripcion: "descripcion 3"
    },
    {
      nombre: "Cristhian Moyón",
      imagen: "https://www.jardineriaon.com/wp-content/uploads/2017/07/arboles-en-alemania.jpg",
      descripcion: "descripcion 4"
    },
    {
      nombre: "Jhonatan Moyón",
      imagen: "https://image.slidesharecdn.com/arboles-131106080436-phpapp01/95/arboles-1-638.jpg?cb=1383725104",
      descripcion: "descripcion 5"
    }

  ];

  todos: TodoInterface[] = [];

  constructor(
    private readonly _todoService: TodosRestService
  ) { }

  ngOnInit(): void {
    this.obtenerTodos();
    this.obtenerTodo(101);
    let uno:TodoInterface = {userId : 3202020, id : 2828282, title : "hola amigos", completed : true }
    this.insertarTodo(uno);
  }



  obtenerTodos() {
    this._todoService.obtenerTodos().subscribe((todos) => {
      this.todos = todos;
      console.log("todos", this.todos);
    },
      (error) => {
        console.error({
          error,
          mensaje: 'Error al cargar todos'
        });
      });
  }

  obtenerTodo(id:number){
    this._todoService.obtenerUno(id).subscribe((todo) => {
      console.log("todo", todo);
    },
      (error) => {
        console.error({
          error,
          mensaje: 'Error al cargar un todo'
        });
      }
    )
  }

  insertarTodo(todo:TodoInterface){
    this._todoService.crearUno(todo).subscribe((todo) => {
      this.todos.push(todo);
      console.log("nuevo todo", this.todos);
    },(error) => {
      console.error({
        error,
        mensaje: 'Error al guardar un todo'
      });
    });
  }
}
