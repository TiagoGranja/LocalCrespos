import { TestBed } from '@angular/core/testing';

import { TempoService } from './http-tempo.service';

describe('TempoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TempoService = TestBed.get(TempoService);
    expect(service).toBeTruthy();
  });
});
