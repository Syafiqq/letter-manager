import {TestBed} from '@angular/core/testing';

import {EnvService} from './env.service';
import * as MockEnv from './../../../../src/env.js';
import {MockEnvService} from './env.service.mock';

describe('EnvService', () => {
  let globEnvService: EnvService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: EnvService, useClass: MockEnvService}
      ]
    });
    globEnvService = TestBed.get(EnvService);
  });

  it('should be created', () => {
    const service: EnvService = TestBed.get(EnvService);
    expect(service).toBeTruthy();
  });

  it('should be store appUrl', () => {
    const service: EnvService = TestBed.get(EnvService);
    service.apiUrl = 'new url';
    expect(service.apiUrl).toEqual('new url');
  });

  it('should create same object', () => {
    const service: EnvService = TestBed.get(EnvService);
    expect(globEnvService).toEqual(service);
  });

  it('should print valid url', () => {
    const service: EnvService = TestBed.get(EnvService);
    expect(service.apiUrl).toEqual(MockEnv.apiUrl);
  });
});
