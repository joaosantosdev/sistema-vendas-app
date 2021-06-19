import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import {StorageUtil} from "../utils/storage.util";
import {Router} from "@angular/router";


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          let responseError = error;
          if (responseError.error) {
            responseError = responseError.error;
          }
          if (!responseError.status) {
            responseError = JSON.parse(`${responseError}`);
          }

          switch (responseError.status) {
            case 403:
              this.handler403();
              break;
          }
          return Observable.throw(responseError);
        })
      );
  }

  handler403() {
    StorageUtil.cleanToken();
    this.router.navigate(['']);
  }

}


export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true
};
