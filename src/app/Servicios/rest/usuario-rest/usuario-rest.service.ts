import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UsuarioInterface } from '../interfaces/usuario.intereface';
import { map } from 'rxjs/operators';
import { UsuarioRestModule } from './usuario-rest.module';

@Injectable({
  providedIn: UsuarioRestModule
})
export class UsuarioRestService {

  constructor(private readonly _httpCl:HttpClient) { }
  resource: string = environment.url + '/users';


  obtenerTodos(): Observable<UsuarioInterface[]> {
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
    return this._httpCl.get<UsuarioInterface[]>(this.resource);
  }

  obtenerUno(id: number): Observable<UsuarioInterface> {

    // return this._httpClient.get<TodoInterface>(this.resource + "/" + id.toString()).pipe(map(a => a as TodoInterface));
    return this._httpCl.get<UsuarioInterface>(this.resource + "/" + id.toString());
  }

  crearUno(usuario: UsuarioInterface): Observable<UsuarioInterface> {
    return this._httpCl.post<UsuarioInterface>(this.resource, usuario).pipe(map(a => a as UsuarioInterface));
  }

  actualizarUno(usuario: UsuarioInterface, id?: number): Observable<UsuarioInterface>  {
    return this._httpCl.put<UsuarioInterface>(this.resource + "/" + id?.toString(), usuario).pipe(map(a => a as UsuarioInterface));
  }

  eliminarUno(id?: number):Observable<void> {
    return this._httpCl.delete(this.resource + "/" + id).pipe(map(a => a as any as void));;
  }
}
