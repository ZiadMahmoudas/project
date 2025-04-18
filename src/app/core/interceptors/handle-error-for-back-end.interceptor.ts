import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, retry, take, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class HandleErrorForBackEndInterceptor implements HttpInterceptor {

  constructor(private auth:AuthService,private toastr:ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.auth.getToken();
    const authReq = token ? request.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    }) : request;

    return next.handle(authReq).pipe(
      catchError(err => {
        if (err.status === 401 || err.status === 403) {
          this.toastr.error("This Email is Unauthorized");
          alert("You should login again");
          this.auth.removeToken();
        }
        return throwError(err);
      })
    );
  }
}
