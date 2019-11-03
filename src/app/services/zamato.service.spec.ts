import { TestBed } from '@angular/core/testing';

import { ZamatoService } from './zamato.service';

describe('ZamatoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZamatoService = TestBed.get(ZamatoService);
    expect(service).toBeTruthy();
  });
});
