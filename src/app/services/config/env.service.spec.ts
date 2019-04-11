import {TestBed} from '@angular/core/testing';

import {EnvService} from './env.service';
import {EnvServiceProvider} from './env.service.provider';
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
});
