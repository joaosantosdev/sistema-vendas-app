import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {Observable} from 'rxjs';
import {ClientDTO} from '../models/ClientDTO';

@Injectable()
export class ClientService {
  constructor(private http: HttpService) {
  }

  save(data: ClientDTO): Observable<void> {
    return this.http.post(`clients`, data);
  }

  getByEmail(email: string): Observable<ClientDTO> {
    return this.http.getSecurity(`clients/email?value=${email}`);
  }
}
