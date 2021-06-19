import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {Observable} from 'rxjs';
import {ClientDTO} from '../models/ClientDTO';

@Injectable()
export class ClientService {
  constructor(private http: HttpService) {
  }

  getByEmail(email: string): Observable<ClientDTO> {
    return this.http.getSecurity(`clients/email?value=${email}`);
  }
}
