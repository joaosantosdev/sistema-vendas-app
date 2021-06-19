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
import {StorageUtil} from '../utils/storage.util';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private alertCtrl: AlertController
  ) {
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
            case 401:
              this.handler401(responseError);
              break;

            default:
              this.handlerDefault(responseError);
          }
          return Observable.throw(responseError);
        })
      );
  }

  handler403() {
    StorageUtil.cleanToken();
    this.router.navigate(['']);
  }

  async handler401(error) {
    const alert = await this.alertCtrl.create({
      header: 'Atenção ',
      message: error.message,
      buttons: ['OK'],
    });
    alert.present();
  }

  async handlerDefault(error) {
    const alert = await this.alertCtrl.create({
      header: 'Error ',
      message: error.message,
      buttons: ['OK'],
    });
    alert.present();
  }
}


export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true
};
