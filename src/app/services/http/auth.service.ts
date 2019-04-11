import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EnvService} from '../config/env.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public baseUrl = this.env.apiUrl;

  constructor(private http: HttpClient, private env: EnvService) {
  }

  getVersion() {
    return this.http.get(this.baseUrl);
  }

  getUrl() {
    return this.env.apiUrl;
  }
}
