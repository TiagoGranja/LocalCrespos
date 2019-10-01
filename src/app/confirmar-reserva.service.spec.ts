import { TestBed } from '@angular/core/testing';

import { ConfirmarReservaService } from './confirmar-reserva.service';

describe('ConfirmarReservaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfirmarReservaService = TestBed.get(ConfirmarReservaService);
    expect(service).toBeTruthy();
  });
});
