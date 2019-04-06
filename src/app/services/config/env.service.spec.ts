import {TestBed} from '@angular/core/testing';

import {EnvService} from './env.service';

describe('EnvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnvService = TestBed.get(EnvService);
    expect(service).toBeTruthy();
  });

  it('should be store appUrl', () => {
    const service: EnvService = TestBed.get(EnvService);
    service.apiUrl = 'new url';
    expect(service.apiUrl).toEqual('new url');
  });
});
