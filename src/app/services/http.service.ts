import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {StorageUtil} from '../utils/storage.util';


@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
  }

  get headersToken() {
    return new HttpHeaders({
      Authorization: `Bearer ${StorageUtil.getToken()}`
    });
  }

  post(url, data, config = {}): Observable<any> {
    return this.http.post(`${environment.baseUrl}/${url}`, data, config);
  }

  get(url): Observable<any> {
    return this.http.get(`${environment.baseUrl}/${url}`);
  }

  getSecurity(url): Observable<any> {
    return this.http.get(`${environment.baseUrl}/${url}`, {
      headers: this.headersToken
    });
  }

}
