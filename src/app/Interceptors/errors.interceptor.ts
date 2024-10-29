import { HttpErrorResponse, HttpEvent,  HttpInterceptorFn } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

export const errorsInterceptor: HttpInterceptorFn = (req, next):Observable<HttpEvent<unknown>> => {
  return next(req).pipe(
    catchError((err:HttpErrorResponse) => {
      switch (err.status) {
        case 400:
          alert(err.error.message);
          console.log('Error 400');
          break;
        case 401:
          console.log('Error 401');
          break;
        case 404:
          console.log('Error 404');
          break;
        case 500:
          console.log('Error 500');
          break;
        default:
          console.log('Error');
          break;
      }
      return new Observable<HttpEvent<unknown>>();
    }
  ));
};
