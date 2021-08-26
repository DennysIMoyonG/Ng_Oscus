import { Component, OnInit } from '@angular/core';
import { AccionesForm } from 'src/app/Clases/accionesForms';
import { ErrorApp } from 'src/app/Clases/Error';
import { UsuarioInterface } from 'src/app/Servicios/rest/interfaces/usuario.intereface';
import { UsuarioRestService } from 'src/app/Servicios/rest/usuario-rest/usuario-rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gestion-usuario',
  templateUrl: './gestion-usuario.component.html',
  styleUrls: ['./gestion-usuario.component.scss']
})
export class GestionUsuarioComponent implements OnInit {

  usuarios: UsuarioInterface[] = [];
  validarFormulario: AccionesForm = new AccionesForm(0, "");
  usuarioMemoriaP: UsuarioInterface = { id: 0, name: "", username: "", email: "" };
  usuarioMemoriaProcesar: any;

  constructor(private readonly _serviceClient: UsuarioRestService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this._serviceClient.obtenerTodos().subscribe((dtUsuarios) => {
      this.usuarios = dtUsuarios;
    }, (error) => {
      console.log(new ErrorApp(error, "Error al obtener informcion"));
    });
  }

  validarForm() {
    this.validarFormulario = new AccionesForm(0, "crear");
    this.procesarDatosUsuario();
  }

  actualizarInformacion(usuario: UsuarioInterface) {
    this.usuarioMemoriaP = usuario;
  }

  recibirInformacion(usuarioMemoriaP?: UsuarioInterface) {

    console.log("(notificado) usuarioMemoriaP", usuarioMemoriaP)
    this.usuarioMemoriaProcesar = usuarioMemoriaP;

  }

  procesarDatosUsuario() {
    console.log("this.usuarioMemoriaProcesar", this.usuarioMemoriaProcesar);
    if (this.usuarioMemoriaProcesar) {

      console.log("Crear", this.usuarioMemoriaProcesar);
      
      if (!this.usuarioMemoriaProcesar.id || this.usuarioMemoriaProcesar.id == 0 ) {

        this._serviceClient.crearUno(this.usuarioMemoriaProcesar).subscribe((nuevoUsr) => {
          this.usuarios.unshift(nuevoUsr);
          this.validarFormulario = new AccionesForm(1, "reset");
        }, (error) => {
          console.error({
            error,
            mensaje: 'Error al crear usuario'
          });
        });
      } else{

        console.log("Actualizar", this.usuarioMemoriaProcesar);
        this._serviceClient.actualizarUno(this.usuarioMemoriaProcesar, this.usuarioMemoriaProcesar.id).subscribe((datosInsertados) => {
          var actualizadoIndex = this.usuarios.findIndex((t) => t.id == datosInsertados.id);
          if (actualizadoIndex)
            this.usuarios[actualizadoIndex] = datosInsertados;
        }, (error) => {
          console.error({
            error,
            mensaje: 'Error al actualizar un usuario'
          });
        });
      }
    }
  }

  resetearFormulario() {
    this.validarFormulario = new AccionesForm(1, "reset");
  }

  eliminarRegistro( usuario: UsuarioInterface) {
    this._serviceClient.eliminarUno(usuario.id).subscribe(() => {
      console.log("eliminado", usuario);

      var index = this.usuarios.findIndex((data) => data.id == usuario.id);
      console.log("eliminado", index);

      if (index)
        this.usuarios.splice(index, 1);
    }, (error) => {
      console.error({
        error,
        mensaje: 'Error al eliminar un todo'
      });
    });
  }

}
