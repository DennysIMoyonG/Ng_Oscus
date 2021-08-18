import { TestBed } from '@angular/core/testing';

import { LogeadoService } from './logeado.service';

describe('LogeadoService', () => {
  let service: LogeadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogeadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
