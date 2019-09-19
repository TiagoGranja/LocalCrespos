import { TestBed } from '@angular/core/testing';

import { HttpTempoService } from './http-tempo.service';

describe('HttpTempoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpTempoService = TestBed.get(HttpTempoService);
    expect(service).toBeTruthy();
  });
});
