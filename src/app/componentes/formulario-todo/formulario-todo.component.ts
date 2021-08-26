import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-todo',
  templateUrl: './formulario-todo.component.html',
  styleUrls: ['./formulario-todo.component.scss']
})
export class FormularioTodoComponent implements OnInit {

  @Input()
  valorTitulo = '';
  @Input()
  valorCompleted = false;

  @Output()
  formValido = new EventEmitter<{titulo:string; completed:boolean} | undefined>();

  todoForm:FormGroup = new FormGroup({});

  constructor(private readonly _fbl:FormBuilder) { }

  enviarFormulario(){
  };

  ngOnInit(): void {
    this.todoForm = this._fbl.group({
      titulo : [this.valorTitulo, [Validators.required, Validators.maxLength(30)]],
      userId : [''],
      id : [''],
      completed : [this.valorCompleted, [Validators.required, Validators.min(1)]]
    });

    this.todoForm.valueChanges.subscribe((datos) => {
      if(this.todoForm){
        if(this.todoForm.valid){

          let title = this.todoForm?.get('titulo');
          let completed = this.todoForm?.get('completed');
         // this.formValido.emit({titulo})
         if(title && completed){
           
           this.formValido.emit({titulo: title.value, completed : completed.value})
         }
        }else{

          this.formValido.emit(undefined);
        }
      }
    },(error) => {

    });
  }

  get validarTitle(){
   
    return this.todoForm?.get('titulo')?.invalid && this.todoForm.get('titulo')?.touched;
  }

  get validateCompleted(){
   
    return this.todoForm?.get('completed')?.invalid && this.todoForm.get('completed')?.touched && this.todoForm.get('completed')?.value;
  }

  obtenerError(key:string){
    
  }
}
