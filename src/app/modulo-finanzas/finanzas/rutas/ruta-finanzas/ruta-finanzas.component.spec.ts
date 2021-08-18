import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaFinanzasComponent } from './ruta-finanzas.component';

describe('RutaFinanzasComponent', () => {
  let component: RutaFinanzasComponent;
  let fixture: ComponentFixture<RutaFinanzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaFinanzasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaFinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
