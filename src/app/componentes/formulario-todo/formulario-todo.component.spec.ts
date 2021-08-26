import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTodoComponent } from './formulario-todo.component';

describe('FormularioTodoComponent', () => {
  let component: FormularioTodoComponent;
  let fixture: ComponentFixture<FormularioTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
