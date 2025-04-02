import { Injectable, NgZone } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, retry, take, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { TokenInterceptor } from './token.interceptor';

@Injectable()
export class HandleErrorForBackEndInterceptor implements HttpInterceptor {

  constructor(private auth:AuthService,private router:Router,private zone: NgZone) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.auth.getToken();
    const authReq = token ? request.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    }) : request;

    return next.handle(authReq).pipe(
      catchError(err => {
        if (err.status === 401 || err.status === 403) {
          alert("You should login again");
          this.auth.removeToken();
            this.router.navigate(["login"]);
        }
        return throwError(err);
      })
    );
  }
}
