import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCreditoComponent } from './ruta-credito.component';

describe('RutaCreditoComponent', () => {
  let component: RutaCreditoComponent;
  let fixture: ComponentFixture<RutaCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaCreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
