import * as Vault from './../../../../src/env.js';

export class MockEnvService {
  public apiUrl = 'http://localhost:8000';

  constructor() {
    this.apiUrl = Vault.apiUrl;
  }
}
