import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, NgControl, Validators } from '@angular/forms';
import { AccionesForm } from 'src/app/Clases/accionesForms';
import { UsuarioInterface } from 'src/app/Servicios/rest/interfaces/usuario.intereface';

@Component({
  selector: 'app-formulario-user',
  templateUrl: './formulario-user.component.html',
  styleUrls: ['./formulario-user.component.scss']
})
export class FormularioUserComponent implements OnInit {

  //Inputs
  @Input()
  usuarioMemoria: UsuarioInterface = { id: 0, name: "", username: "", email: "" };
  @Input()
  accionesForm: AccionesForm = new AccionesForm(0, "");

  //Propiedades clase 
  userForm: FormGroup = new FormGroup({});

  //Propiedades Output
  @Output()
  notificarDatos = new EventEmitter<UsuarioInterface | undefined>();

  constructor(private readonly _fbl: FormBuilder) { }

  ngOnInit(): void {
    this.inicalizarForm();

    this.userForm.valueChanges.subscribe((datos)=>{
      if(this.userForm){
        if(this.userForm.valid){
          let datosNotificar:UsuarioInterface = {
            id: this.userForm?.get('id')?.value, name: this.userForm?.get('nombre')?.value , username: this.userForm?.get('usuario')?.value, email: this.userForm?.get('correo')?.value
          }
          this.notificarDatos.emit(datosNotificar);
        }else{
          this.notificarDatos.emit(undefined);
        }
      }
    }, (error) => {

    });  
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("cahnge", changes.accionesForm);
    if (changes.accionesForm) {
      this.validarFormulario(changes.accionesForm.currentValue);
    }

    if (changes.usuarioMemoria) {
      this.setValuesEditForm();
    }
  }

  //get validaciones
  get validarNombre() {
    return this.userForm?.get('nombre')?.invalid && this.userForm.get('nombre')?.touched;
  }

  get validarUsuario() {
    return this.userForm?.get('usuario')?.invalid && this.userForm.get('usuario')?.touched;
  }

  get validarCorreo() {
    return this.userForm?.get('correo')?.invalid && this.userForm.get('correo')?.touched;;
  }

  enviarDatos() { }

  inicalizarForm() {
    this.userForm = this._fbl.group({
      nombre: [this.usuarioMemoria.name, [Validators.required, Validators.maxLength(30)]],
      usuario: [this.usuarioMemoria.username, [Validators.required, Validators.maxLength(30)]],
      correo: [this.usuarioMemoria.email, [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],   
      id:[0]
    });
  }

  validarFormulario(validar: AccionesForm) {
    console.log("se requiere validar", validar);
    console.log("se requiere validar", this.userForm);
    if (validar.codigo == 0) {
      if (this.userForm.invalid) {
        return Object.values(this.userForm.controls).forEach(controls => {
          controls.markAsTouched();
        });
      } else {
        //hay que emitir la data
        let datosNotificar:UsuarioInterface = {
          id: this.userForm?.get('id')?.value, name: this.userForm?.get('nombre')?.value , username: this.userForm?.get('usuario')?.value, email: this.userForm?.get('correo')?.value
        }
        this.notificarDatos.emit(datosNotificar);
      }
    }else if(validar.codigo == 1){
      this.userForm.reset();
    }
  }

  setValuesEditForm() {
    this.userForm.patchValue({ id: this.usuarioMemoria.id, nombre: this.usuarioMemoria.name, usuario: this.usuarioMemoria.username, correo : this.usuarioMemoria.email })
  }


  
}
