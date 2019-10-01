import { TestBed } from '@angular/core/testing';

import { ApiInternaService } from './api-interna.service';

describe('ApiInternaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiInternaService = TestBed.get(ApiInternaService);
    expect(service).toBeTruthy();
  });
});
