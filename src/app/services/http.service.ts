import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';


@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {
  }


  get(url): Observable<any> {
    return this.http.get(`${environment.baseUrl}/${url}`);
  }


}
