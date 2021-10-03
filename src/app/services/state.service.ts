import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {Observable} from 'rxjs';
import {State} from '../models/State';
import {City} from '../models/City';

@Injectable()
export class StateService {
  constructor(private http: HttpService) {
  }

  getStates(): Observable<State[]> {
    return this.http.get(`states`);
  }
  getCitiesByState(id: number): Observable<City[]> {
    return this.http.get(`states/${id}/cities`);
  }
}
