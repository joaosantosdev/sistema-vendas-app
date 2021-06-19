import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {LoginDTO} from '../models/LoginDTO';
import {StorageUtil} from '../utils/storage.util';

@Injectable()
export class AuthService {
  constructor(private http: HttpService) {
  }

  login(data: LoginDTO) {
    return this.http.post('login', data, {
      observe: 'response',
      responseType: 'text'
    });
  }

  successfulLogin(authorization: string) {
    const token = authorization.substring(7);
    StorageUtil.setToken(token);
  }

  logout(){
    StorageUtil.cleanToken();
  }
}
