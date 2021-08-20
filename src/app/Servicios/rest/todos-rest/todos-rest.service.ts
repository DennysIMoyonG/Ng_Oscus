import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoInterface } from '../interfaces/todos.interface';
import { TodosRestModule } from './todos-rest.module';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: TodosRestModule
})
export class TodosRestService {

  // inyeccion de dependencia
  constructor(private readonly _httpClient: HttpClient) { }
  resource: string = environment.url + '/todos';

  obtenerTodos(): Observable<TodoInterface[]> {
    // return this._httpClient.get(this.resource)
    // .pipe(map(
    //   (datos:any) => {
    //     const datoCambiado = datos.map((dato : TodoInterface) => {
    //       if(dato.title){
    //         dato.title = dato.title.toUpperCase();
    //       }
    //       return dato;
    //     }) as TodoInterface[];
    //     return datoCambiado;
    // }));
    return this._httpClient.get<TodoInterface[]>(this.resource);
  }

  obtenerUno(id: number): Observable<TodoInterface> {

    // return this._httpClient.get<TodoInterface>(this.resource + "/" + id.toString()).pipe(map(a => a as TodoInterface));
    return this._httpClient.get<TodoInterface>(this.resource + "/" + id.toString());
  }

  crearUno(todo: TodoInterface): Observable<TodoInterface> {
    return this._httpClient.post<TodoInterface>(this.resource, todo).pipe(map(a => a as TodoInterface));
  }

  actualizarUno(todo: TodoInterface, id: number) {
    return this._httpClient.put<TodoInterface>(this.resource + "/" + id.toString(), todo).pipe(map(a => a as TodoInterface));
  }

  eliminarUno(id: number) {
    this._httpClient.delete(this.resource + "/" + id.toString()).pipe(map(a => a as any as void));;
  }
}
