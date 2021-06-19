import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {Observable} from 'rxjs';
import {CategoryDTO} from '../models/CategoryDTO';

@Injectable()
export class CategoryService {
  constructor(private http: HttpService) {
  }

  getAll(): Observable<Array<CategoryDTO>> {
    return this.http.get('categories');
  }
}
